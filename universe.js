import { initPlanets } from './inits/initPlanets.js';
import { initSpacecraft } from './inits/initSpacecraft.js';
import { initAsteroids } from './inits/initAsteroids.js';
import { initComets } from './inits/initComets.js';
import { initDwarfPlanets } from './inits/initDwarfPlanets.js';
import { initConstellations } from './inits/initConstellations.js';    
        
        
        
        
        
        
        
        class EnhancedSolarSystem {
            constructor() {
                this.canvas = document.getElementById('solarCanvas');
                this.ctx = this.canvas.getContext('2d');
                this.tooltip = document.getElementById('tooltip');
                
                // Enhanced features
                this.showAsteroids = false;
                this.showComets = false;
                this.showSpacecraft = false;
                this.showDwarfPlanets = false;
                this.showEllipses = false;
                this.showBarycenter = false;
                this.showConstellations = false;
                this.comparisonPlanets = [];
                
                // Scale modes
                this.scaleMode = 'true-scale';
                
                // Viewport settings
                this.camera = {
                    x: 0,
                    y: 0,
                    zoom: 1,
                    targetZoom: 1,
                    targetX: 0,
                    targetY: 0
                };
                
                // Interaction
                this.mouse = { x: 0, y: 0, down: false, lastX: 0, lastY: 0 };
                this.hoveredObject = null;
                
                // Animation
                this.time = 0;
                this.simulatedDate = new Date();
                this.animationSpeed = 0.001;
                this.showOrbits = true;
                this.showLabels = true;
                this.showMoons = true;
                this.animationPaused = false;
                
                // Time scaling
                this.timeScale = 1;
                this.timeScaleOptions = {
                    'normal': 0.001,
                    '1sec-day': 1,
                    '1sec-week': 7,
                    '1sec-month': 30
                };
                this.currentTimeScale = '1sec-day';
                
                // Scale factor for the entire system
                this.baseScale = 1000000; // 1 pixel = 1 million km
                
                this.initCanvas();
                // this.initPlanets();
                // this.initAsteroids();
                // this.initComets();
                // this.initSpacecraft();
                // this.initDwarfPlanets();
                // this.initConstellations();
                initPlanets(this);
                initAsteroids(this);
                initComets(this);
                initSpacecraft(this);
                initDwarfPlanets(this);
                initConstellations(this);
                this.initEvents();
                this.animate();
            }
            
            initCanvas() {
                this.resizeCanvas();
                window.addEventListener('resize', () => this.resizeCanvas());
            }
            
            resizeCanvas() {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }
            




            
            initEvents() {
                // Mouse events
                this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
                this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
                this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e));
                this.canvas.addEventListener('wheel', (e) => this.handleWheel(e));
                this.canvas.addEventListener('click', (e) => this.handleClick(e));
                
                // Basic controls
                document.getElementById('reset-view').addEventListener('click', () => this.resetView());
                document.getElementById('toggle-animation').addEventListener('click', () => this.toggleAnimation());
                document.getElementById('toggle-orbits').addEventListener('click', () => this.toggleOrbits());
                document.getElementById('toggle-labels').addEventListener('click', () => this.toggleLabels());
                document.getElementById('toggle-moons').addEventListener('click', () => this.toggleMoons());
                
                // Enhanced features
                document.getElementById('toggle-asteroids').addEventListener('click', () => this.toggleAsteroids());
                document.getElementById('toggle-comets').addEventListener('click', () => this.toggleComets());
                document.getElementById('toggle-spacecraft').addEventListener('click', () => this.toggleSpacecraft());
                document.getElementById('toggle-dwarf-planets').addEventListener('click', () => this.toggleDwarfPlanets());
                document.getElementById('toggle-constellations').addEventListener('click', () => this.toggleConstellations());
                document.getElementById('toggle-ellipses').addEventListener('click', () => this.toggleEllipses());
                document.getElementById('toggle-barycenter').addEventListener('click', () => this.toggleBarycenter());
                
                // Time scale events
                document.getElementById('time-normal').addEventListener('click', () => this.setTimeScale('normal'));
                document.getElementById('time-1sec-day').addEventListener('click', () => this.setTimeScale('1sec-day'));
                document.getElementById('time-1sec-week').addEventListener('click', () => this.setTimeScale('1sec-week'));
                document.getElementById('time-1sec-month').addEventListener('click', () => this.setTimeScale('1sec-month'));
                
                // Scale mode events
                document.getElementById('true-scale').addEventListener('click', () => this.setScaleMode('true-scale'));
                document.getElementById('enhanced-planets').addEventListener('click', () => this.setScaleMode('enhanced-planets'));
                document.getElementById('logarithmic').addEventListener('click', () => this.setScaleMode('logarithmic'));
                
                // Search functionality
                document.getElementById('search-box').addEventListener('input', (e) => this.handleSearch(e.target.value));
                
                // Comparison functionality
                document.querySelectorAll('.comparison-planet').forEach(el => {
                    el.addEventListener('click', () => this.handleComparison(el.dataset.planet));
                });
                
                // Constellation selection
                document.querySelectorAll('.constellation-item').forEach(el => {
                    el.addEventListener('click', () => this.highlightConstellation(el.dataset.constellation));
                });
            }

            handleSearch(query) {
                const results = document.getElementById('search-results');
                results.innerHTML = '';
                
                if (!query.trim()) return;
                
                const allObjects = [
                    ...this.planets,
                    ...this.asteroids.slice(0, 10), // Show only major asteroids
                    ...this.comets,
                    ...this.spacecraft,
                    ...this.dwarfPlanets,
                    ...this.constellations
                ];
                
                const matches = allObjects.filter(obj => 
                    obj.name.toLowerCase().includes(query.toLowerCase()) ||
                    (obj.commonName && obj.commonName.toLowerCase().includes(query.toLowerCase()))
                ).slice(0, 8); // Limit results
                
                matches.forEach(obj => {
                    const div = document.createElement('div');
                    div.className = 'search-result';
                    div.textContent = `${obj.name}${obj.commonName ? ` (${obj.commonName})` : ''} (${obj.type || 'constellation'})`;
                    div.onclick = () => this.focusOnObject(obj);
                    results.appendChild(div);
                });
            }

            handleComparison(planetName) {
                const element = document.querySelector(`[data-planet="${planetName}"]`);
                const planet = this.planets.find(p => p.name === planetName);
                
                if (!planet) return;
                
                if (this.comparisonPlanets.includes(planetName)) {
                    // Remove from comparison
                    this.comparisonPlanets = this.comparisonPlanets.filter(p => p !== planetName);
                    element.classList.remove('selected');
                } else if (this.comparisonPlanets.length < 2) {
                    // Add to comparison
                    this.comparisonPlanets.push(planetName);
                    element.classList.add('selected');
                }
                
                this.updateComparison();
            }

            updateComparison() {
                const results = document.getElementById('comparison-results');
                
                if (this.comparisonPlanets.length < 2) {
                    results.innerHTML = 'Select 2 planets to compare';
                    return;
                }
                
                const planet1 = this.planets.find(p => p.name === this.comparisonPlanets[0]);
                const planet2 = this.planets.find(p => p.name === this.comparisonPlanets[1]);
                
                const sizeRatio = (planet1.realRadius / planet2.realRadius).toFixed(2);
                const distanceRatio = (planet1.realDistance / planet2.realDistance).toFixed(2);
                
                results.innerHTML = `
                    <div>${planet1.name} vs ${planet2.name}:</div>
                    <div>Size ratio: ${sizeRatio}:1</div>
                    <div>Distance ratio: ${distanceRatio}:1</div>
                `;
            }

            toggleAsteroids() {
                this.showAsteroids = !this.showAsteroids;
                const btn = document.getElementById('toggle-asteroids');
                btn.classList.toggle('active', this.showAsteroids);
            }

            toggleComets() {
                this.showComets = !this.showComets;
                const btn = document.getElementById('toggle-comets');
                btn.classList.toggle('active', this.showComets);
            }

            toggleSpacecraft() {
                this.showSpacecraft = !this.showSpacecraft;
                const btn = document.getElementById('toggle-spacecraft');
                btn.classList.toggle('active', this.showSpacecraft);
            }

            toggleDwarfPlanets() {
                this.showDwarfPlanets = !this.showDwarfPlanets;
                const btn = document.getElementById('toggle-dwarf-planets');
                btn.classList.toggle('active', this.showDwarfPlanets);
            }

            toggleConstellations() {
                this.showConstellations = !this.showConstellations;
                const btn = document.getElementById('toggle-constellations');
                btn.classList.toggle('active', this.showConstellations);
                
                const info = document.getElementById('constellation-info');
                info.style.display = this.showConstellations ? 'block' : 'none';
            }

            toggleEllipses() {
                this.showEllipses = !this.showEllipses;
                const btn = document.getElementById('toggle-ellipses');
                btn.classList.toggle('active', this.showEllipses);
                
                const info = document.getElementById('ellipse-info');
                info.style.display = this.showEllipses ? 'block' : 'none';
            }

            toggleBarycenter() {
                this.showBarycenter = !this.showBarycenter;
                const btn = document.getElementById('toggle-barycenter');
                btn.classList.toggle('active', this.showBarycenter);
            }

            highlightConstellation(name) {
                // Highlight the selected constellation in the list
                document.querySelectorAll('.constellation-item').forEach(el => {
                    el.style.background = el.dataset.constellation === name ? 
                        'rgba(0, 255, 136, 0.2)' : 'rgba(255, 255, 255, 0.05)';
                });
                
                // Center view on the constellation
                const constellation = this.constellations.find(c => c.name === name);
                if (constellation) {
                    this.camera.targetX = -constellation.stars[0].x * 1000;
                    this.camera.targetY = -constellation.stars[0].y * 1000;
                    this.camera.targetZoom = 0.1;
                }
            }
            
            getPlanetRadius(planet) {
                const baseRadius = planet.realRadius / this.baseScale;
                
                switch(this.scaleMode) {
                    case 'true-scale':
                        // FIXED: Ensure minimum visible size even at high zoom
                        return Math.max(baseRadius * this.camera.zoom, 1.5);
                    case 'enhanced-planets':
                        // FIXED: Better scaling for enhanced mode
                        return Math.max(baseRadius * this.camera.zoom * 50, 2);
                    case 'logarithmic':
                        const logRadius = Math.log10(planet.realRadius) * 2;
                        return Math.max(logRadius * this.camera.zoom, 2);
                    default:
                        return Math.max(baseRadius * this.camera.zoom, 1.5);
                }
            }

            getObjectRadius(obj) {
                if (!obj.realRadius) return 2;
                
                const baseRadius = obj.realRadius / this.baseScale;
                
                switch(this.scaleMode) {
                    case 'true-scale':
                        // FIXED: Ensure minimum visible size
                        return Math.max(baseRadius * this.camera.zoom, 1.0);
                    case 'enhanced-planets':
                        if (obj.type === 'asteroid') return Math.max(baseRadius * this.camera.zoom * 2000, 1.5);
                        return Math.max(baseRadius * this.camera.zoom * 200, 1.5);
                    case 'logarithmic':
                        const logRadius = Math.log10(Math.max(obj.realRadius, 1)) * 1.5;
                        return Math.max(logRadius * this.camera.zoom, 1.0);
                    default:
                        return Math.max(baseRadius * this.camera.zoom, 1.0);
                }
            }

            getDistance(obj) {
                if (!obj.realDistance && obj.realDistance !== 0) return 0;
                
                const baseDistance = obj.realDistance / this.baseScale;
                
                switch(this.scaleMode) {
                    case 'logarithmic':
                        if (obj.realDistance === 0) return 0;
                        const logDistance = Math.log10(obj.realDistance / 1000000) * 50;
                        return logDistance;
                    default:
                        return baseDistance;
                }
            }

            getEllipticalPosition(obj, angle) {
                if (!this.showEllipses || !obj.eccentricity) {
                    return {
                        distance: this.getDistance(obj),
                        x: Math.cos(angle),
                        y: Math.sin(angle)
                    };
                }

                const a = this.getDistance(obj); // semi-major axis
                const e = obj.eccentricity;
                const b = a * Math.sqrt(1 - e * e); // semi-minor axis
                
                const x = a * Math.cos(angle);
                const y = b * Math.sin(angle);
                const distance = Math.sqrt(x * x + y * y);
                
                return {
                    distance: distance,
                    x: x / distance,
                    y: y / distance
                };
            }
            
            setScaleMode(mode) {
                this.scaleMode = mode;
                
                document.querySelectorAll('.scale-mode-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.getElementById(mode).classList.add('active');
                
                const scaleDetails = document.getElementById('scale-details');
                switch(mode) {
                    case 'true-scale':
                        scaleDetails.textContent = 'Astronomically accurate sizes and distances';
                        break;
                    case 'enhanced-planets':
                        scaleDetails.textContent = 'Enhanced visibility for small objects';
                        break;
                    case 'logarithmic':
                        scaleDetails.textContent = 'Logarithmic scaling for system overview';
                        break;
                }
            }
            
            setTimeScale(scale) {
                this.currentTimeScale = scale;
                this.timeScale = this.timeScaleOptions[scale];
                
                document.querySelectorAll('.time-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.getElementById(`time-${scale}`).classList.add('active');
                
                const timeDisplay = document.getElementById('time-display');
                switch(scale) {
                    case 'normal':
                        timeDisplay.textContent = 'Real Time';
                        break;
                    case '1sec-day':
                        timeDisplay.textContent = '1 Second = 1 Day';
                        break;
                    case '1sec-week':
                        timeDisplay.textContent = '1 Second = 1 Week';
                        break;
                    case '1sec-month':
                        timeDisplay.textContent = '1 Second = 1 Month';
                        break;
                }
            }
            
            handleMouseDown(e) {
                this.mouse.down = true;
                this.mouse.lastX = e.clientX;
                this.mouse.lastY = e.clientY;
            }
            
            handleMouseMove(e) {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
                
                if (this.mouse.down) {
                    const deltaX = e.clientX - this.mouse.lastX;
                    const deltaY = e.clientY - this.mouse.lastY;
                    
                    this.camera.targetX += deltaX / this.camera.zoom;
                    this.camera.targetY += deltaY / this.camera.zoom;
                    
                    this.mouse.lastX = e.clientX;
                    this.mouse.lastY = e.clientY;
                } else {
                    this.checkHover(e.clientX, e.clientY);
                }
            }
            
            handleMouseUp(e) {
                this.mouse.down = false;
            }
            
            handleWheel(e) {
                e.preventDefault();
                const zoomFactor = e.deltaY > 0 ? 0.8 : 1.25;
                this.camera.targetZoom = Math.max(0.001, Math.min(1000, this.camera.targetZoom * zoomFactor));
            }
            
            handleClick(e) {
                const obj = this.getObjectAtPosition(e.clientX, e.clientY);
                if (obj) {
                    this.focusOnObject(obj);
                }
            }

            focusOnObject(obj) {
                if (!obj) return;
                
                let position;
                if (obj.type === 'spacecraft') {
                    position = {
                        x: Math.cos(obj.angle || 0) * (obj.realDistance / this.baseScale),
                        y: Math.sin(obj.angle || 0) * (obj.realDistance / this.baseScale)
                    };
                } else if (obj.stars) {
                    // For constellations, center on the first star
                    position = {
                        x: obj.stars[0].x * 1000,
                        y: obj.stars[0].y * 1000
                    };
                } else {
                    const elliptical = this.getEllipticalPosition(obj, obj.angle || 0);
                    position = {
                        x: elliptical.x * elliptical.distance,
                        y: elliptical.y * elliptical.distance
                    };
                }
                
                this.camera.targetX = -position.x;
                this.camera.targetY = -position.y;
                
                // Appropriate zoom level
                const radius = this.getObjectRadius(obj);
                if (radius < 10) {
                    this.camera.targetZoom = Math.min(50, 10 / radius * this.camera.targetZoom);
                }
            }
            
            checkHover(mouseX, mouseY) {
                const obj = this.getObjectAtPosition(mouseX, mouseY);
                
                if (obj !== this.hoveredObject) {
                    this.hoveredObject = obj;
                    
                    if (obj) {
                        let tooltipText = `${obj.name}`;
                        if (obj.commonName) tooltipText += ` (${obj.commonName})`;
                        if (obj.realRadius) tooltipText += `\nRadius: ${obj.realRadius.toLocaleString()} km`;
                        if (obj.realDistance) tooltipText += `\nDistance: ${(obj.realDistance / 1000000).toFixed(1)} million km`;
                        if (obj.status) tooltipText += `\nStatus: ${obj.status}`;
                        if (obj.launched) tooltipText += `\nLaunched: ${obj.launched}`;
                        if (obj.info && obj.info.bestView) tooltipText += `\nBest View: ${obj.info.bestView}`;
                        
                        this.showTooltip(tooltipText, mouseX, mouseY);
                    } else {
                        this.hideTooltip();
                    }
                }
                
                if (obj && this.tooltip.classList.contains('show')) {
                    this.tooltip.style.left = mouseX + 'px';
                    this.tooltip.style.top = mouseY + 'px';
                }
            }
            
            getObjectAtPosition(mouseX, mouseY) {
                const centerX = this.canvas.width / 2 + this.camera.x * this.camera.zoom;
                const centerY = this.canvas.height / 2 + this.camera.y * this.camera.zoom;
                
                // FIXED: Only limit asteroids for performance, but keep all visible
                const allObjects = [
                    ...this.planets,
                    ...(this.showAsteroids ? this.asteroids.slice(0, 100) : []), // Increased from 50
                    ...(this.showComets ? this.comets : []),
                    ...(this.showSpacecraft ? this.spacecraft : []),
                    ...(this.showDwarfPlanets ? this.dwarfPlanets : []),
                    ...(this.showConstellations ? this.constellations : [])
                ];
                
                for (const obj of allObjects) {
                    let objX, objY;
                    
                    if (obj.type === 'spacecraft') {
                        const distance = obj.realDistance / this.baseScale;
                        objX = centerX + Math.cos(obj.angle || 0) * distance * this.camera.zoom;
                        objY = centerY + Math.sin(obj.angle || 0) * distance * this.camera.zoom;
                    } else if (obj.stars) {
                        // For constellations, check if we're hovering near any star
                        for (const star of obj.stars) {
                            const starX = centerX + star.x * 1000 * this.camera.zoom;
                            const starY = centerY + star.y * 1000 * this.camera.zoom;
                            
                            const distanceToMouse = Math.sqrt((mouseX - starX) ** 2 + (mouseY - starY) ** 2);
                            // FIXED: Better hit detection for stars
                            const hitRadius = Math.max(8 * this.camera.zoom, 5);
                            
                            if (distanceToMouse < hitRadius) {
                                return obj;
                            }
                        }
                        continue;
                    } else {
                        const elliptical = this.getEllipticalPosition(obj, obj.angle || 0);
                        objX = centerX + elliptical.x * elliptical.distance * this.camera.zoom;
                        objY = centerY + elliptical.y * elliptical.distance * this.camera.zoom;
                    }
                    
                    const distanceToMouse = Math.sqrt((mouseX - objX) ** 2 + (mouseY - objY) ** 2);
                    // FIXED: Better hit radius calculation
                    const hitRadius = Math.max(this.getObjectRadius(obj) + 3, 5);
                    
                    if (distanceToMouse < hitRadius) {
                        return obj;
                    }
                }
                return null;
            }
            
            showTooltip(text, x, y) {
                this.tooltip.textContent = text;
                this.tooltip.style.left = x + 'px';
                this.tooltip.style.top = y + 'px';
                this.tooltip.classList.add('show');
            }
            
            hideTooltip() {
                this.tooltip.classList.remove('show');
            }
            
            resetView() {
                this.camera.targetX = 0;
                this.camera.targetY = 0;
                this.camera.targetZoom = 1;
            }
            
            toggleAnimation() {
                this.animationPaused = !this.animationPaused;
                const btn = document.getElementById('toggle-animation');
                btn.textContent = this.animationPaused ? 'Play' : 'Pause';
            }
            
            toggleOrbits() {
                this.showOrbits = !this.showOrbits;
            }
            
            toggleLabels() {
                this.showLabels = !this.showLabels;
            }

            toggleMoons() {
                this.showMoons = !this.showMoons;
            }
            
            updateCamera() {
                const lerpFactor = 0.05;
                this.camera.x += (this.camera.targetX - this.camera.x) * lerpFactor;
                this.camera.y += (this.camera.targetY - this.camera.y) * lerpFactor;
                this.camera.zoom += (this.camera.targetZoom - this.camera.zoom) * lerpFactor;
                
                let zoomText = this.camera.zoom < 0.01 ? 
                    (this.camera.zoom * 1000).toFixed(1) + 'e-3x' : 
                    this.camera.zoom.toFixed(2) + 'x';
                
                document.getElementById('zoom-level').textContent = zoomText;
            }
            
            updateObjects() {
                if (!this.animationPaused) {
                    this.time += this.animationSpeed;
                    
                    // Update simulated date
                    this.simulatedDate = new Date(Date.now() + this.time * this.timeScale * 24 * 60 * 60 * 1000);
                    document.getElementById('current-date').textContent = this.simulatedDate.toLocaleDateString();
                    
                    // Update all objects
                    [...this.planets, ...this.asteroids, ...this.comets, ...this.dwarfPlanets].forEach((obj, index) => {
                        if (obj.realDistance > 0) { // Skip sun
                            const speedInRadians = (obj.speed * Math.PI / 180) * this.timeScale / 60;
                            obj.angle = (obj.angle || 0) + speedInRadians;
                            
                            // Update moons
                            if (obj.moons && obj.moons.length > 0) {
                                obj.moons.forEach(moon => {
                                    const moonSpeedInRadians = (moon.speed * Math.PI / 180) * this.timeScale / 60;
                                    moon.angle = (moon.angle || 0) + moonSpeedInRadians;
                                });
                            }
                        }
                    });
                    
                    // Update spacecraft (they move in straight lines mostly)
                    this.spacecraft.forEach(craft => {
                        const speedInRadians = (craft.speed * Math.PI / 180) * this.timeScale / 60;
                        craft.angle = (craft.angle || 0) + speedInRadians;
                    });
                }
            }
            
            
            render() {
                this.ctx.fillStyle = '#000';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                
                this.renderStars();
                
                const centerX = this.canvas.width / 2 + this.camera.x * this.camera.zoom;
                const centerY = this.canvas.height / 2 + this.camera.y * this.camera.zoom;
                
                // Draw constellations first (in background)
                if (this.showConstellations) {
                    this.renderConstellations(centerX, centerY);
                }
                
                // Draw orbits
                if (this.showOrbits) {
                    this.renderOrbits(centerX, centerY);
                }
                
                // Draw all objects
                this.renderObjects(centerX, centerY);
                
                // Draw scale reference
                this.renderScaleReference();
            }
            
            renderConstellations(centerX, centerY) {
                this.ctx.lineWidth = 1;
                
                this.constellations.forEach(constellation => {
                    // Draw constellation lines
                    this.ctx.strokeStyle = 'rgba(100, 150, 255, 0.3)';
                    this.ctx.setLineDash([5, 3]);
                    
                    constellation.lines.forEach(line => {
                        const star1 = constellation.stars[line[0]];
                        const star2 = constellation.stars[line[1]];
                        
                        const x1 = centerX + star1.x * 1000 * this.camera.zoom;
                        const y1 = centerY + star1.y * 1000 * this.camera.zoom;
                        const x2 = centerX + star2.x * 1000 * this.camera.zoom;
                        const y2 = centerY + star2.y * 1000 * this.camera.zoom;
                        
                        this.ctx.beginPath();
                        this.ctx.moveTo(x1, y1);
                        this.ctx.lineTo(x2, y2);
                        this.ctx.stroke();
                    });
                    
                    this.ctx.setLineDash([]);
                    
                    // Draw constellation stars
                    constellation.stars.forEach(star => {
                        const x = centerX + star.x * 1000 * this.camera.zoom;
                        const y = centerY + star.y * 1000 * this.camera.zoom;
                        
                        // Star size based on brightness
                        const size = (6 - star.brightness) * 0.8 * this.camera.zoom;
                        
                        // Draw star
                        this.ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.brightness/6})`;
                        this.ctx.beginPath();
                        this.ctx.arc(x, y, Math.max(size, 1), 0, Math.PI * 2);
                        this.ctx.fill();
                        
                        // Draw star glow
                        if (this.camera.zoom > 0.1) {
                            const gradient = this.ctx.createRadialGradient(
                                x, y, 0,
                                x, y, size * 2
                            );
                            gradient.addColorStop(0, `rgba(255, 255, 255, ${0.5 - star.brightness/12})`);
                            gradient.addColorStop(1, 'transparent');
                            
                            this.ctx.fillStyle = gradient;
                            this.ctx.fillRect(x - size * 2, y - size * 2, size * 4, size * 4);
                        }
                        
                        // Draw star name if zoomed in enough
                        if (this.showLabels && this.camera.zoom > 0.5 && star.name) {
                            this.renderLabel(star.name, x, y + size + 12, '10px');
                        }
                    });
                    
                    // Draw constellation name
                    if (this.showLabels && this.camera.zoom > 0.2) {
                        const firstStar = constellation.stars[0];
                        const x = centerX + firstStar.x * 1000 * this.camera.zoom;
                        const y = centerY + firstStar.y * 1000 * this.camera.zoom;
                        
                        this.renderLabel(constellation.name, x, y - 20, '12px');
                    }
                });
            }
            
renderOrbits(centerX, centerY) {
    this.ctx.lineWidth = 1;
    
    // Planet orbits - properly handle their elliptical nature
    this.planets.slice(1).forEach(planet => {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        
        // Use semi-major axis for proper elliptical orbit calculation
        const semiMajorAxis = planet.path?.a || planet.realDistance;
        const e = planet.eccentricity || 0;
        
        // Calculate the actual dimensions of the elliptical orbit
        const a = semiMajorAxis / this.baseScale * this.camera.zoom; // semi-major axis
        const b = a * Math.sqrt(1 - e * e); // semi-minor axis
        
        if (a > 0 && a < 20000) {
            this.ctx.beginPath();
            
            if (this.showEllipses && e > 0) {
                // Apply orbital rotation based on longitude of ascending node
                const rotation = planet.path?.omega ? planet.path.omega * Math.PI / 180 : 0;
                
                // Draw the elliptical orbit
                this.ctx.ellipse(centerX, centerY, a, b, rotation, 0, Math.PI * 2);
            } else {
                // Fallback to circular approximation
                this.ctx.arc(centerX, centerY, a, 0, Math.PI * 2);
            }
            this.ctx.stroke();
        }
    });
    
    // Dwarf planet orbits - properly handle high eccentricity
    if (this.showDwarfPlanets) {
        this.dwarfPlanets.forEach(dwarf => {
            this.ctx.strokeStyle = 'rgba(180, 180, 255, 0.2)';
            
            // For highly elliptical orbits, we need to calculate based on semi-major axis
            const semiMajorAxis = dwarf.path?.a || dwarf.realDistance;
            const e = dwarf.eccentricity || 0;
            
            // Calculate the actual dimensions of the elliptical orbit
            const a = semiMajorAxis / this.baseScale * this.camera.zoom; // semi-major axis
            const b = a * Math.sqrt(1 - e * e); // semi-minor axis
            
            if (a > 0 && a < 15000) {
                this.ctx.beginPath();
                
                // Apply orbital rotation based on longitude of ascending node
                const rotation = dwarf.path?.omega ? dwarf.path.omega * Math.PI / 180 : 0;
                
                // Draw the elliptical orbit
                this.ctx.ellipse(centerX, centerY, a, b, rotation, 0, Math.PI * 2);
                this.ctx.stroke();
                
                // For extremely eccentric orbits like Sedna, add a visual indicator
                if (e > 0.5) {
                    this.ctx.strokeStyle = 'rgba(255, 100, 100, 0.3)';
                    this.ctx.beginPath();
                    this.ctx.ellipse(centerX, centerY, a, b, rotation, 0, Math.PI * 2);
                    this.ctx.stroke();
                }
            }
        });
    }
    
    // Comet orbits
    if (this.showComets) {
        this.comets.forEach(comet => {
            this.ctx.strokeStyle = 'rgba(100, 200, 255, 0.2)';
            const semiMajorAxis = (comet.aphelion + comet.perihelion) / 2;
            const e = comet.eccentricity;
            const a = semiMajorAxis / this.baseScale * this.camera.zoom;
            const b = a * Math.sqrt(1 - e * e);
            
            if (a < 15000 && a > 10) {
                this.ctx.beginPath();
                // Apply rotation if comet has orbital parameters
                const rotation = comet.omega ? comet.omega * Math.PI / 180 : 0;
                this.ctx.ellipse(centerX, centerY, a, b, rotation, 0, Math.PI * 2);
                this.ctx.stroke();
            }
        });
    }
    
    // Asteroid belt - still show as circular region for visual clarity
    if (this.showAsteroids) {
        this.ctx.strokeStyle = 'rgba(100, 100, 100, 0.3)';
        const innerRadius = 280000000 / this.baseScale * this.camera.zoom;
        const outerRadius = 480000000 / this.baseScale * this.camera.zoom;
        
        if (innerRadius < 15000 && outerRadius > 10) {
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
            this.ctx.stroke();
        }
    }
}
            
            renderObjects(centerX, centerY) {
                // Render planets
                this.planets.forEach(planet => this.renderPlanet(planet, centerX, centerY));
                
                // Render additional objects
                if (this.showAsteroids) {
                    this.asteroids.forEach(asteroid => this.renderObject(asteroid, centerX, centerY));
                }
                
                if (this.showComets) {
                    this.comets.forEach(comet => this.renderComet(comet, centerX, centerY));
                }
                
                if (this.showSpacecraft) {
                    this.spacecraft.forEach(craft => this.renderSpacecraft(craft, centerX, centerY));
                }
                
                if (this.showDwarfPlanets) {
                    this.dwarfPlanets.forEach(dwarf => this.renderPlanet(dwarf, centerX, centerY));
                }
            }


            renderPlanet(planet, centerX, centerY) {
                const elliptical = this.getEllipticalPosition(planet, planet.angle || 0);
                const planetX = centerX + elliptical.x * elliptical.distance * this.camera.zoom;
                const planetY = centerY + elliptical.y * elliptical.distance * this.camera.zoom;
                const radius = this.getPlanetRadius(planet);
                
                // FIXED: Much more lenient bounds check - only cull if REALLY far off screen
                const cullMargin = Math.max(2000, radius * 10); // Dynamic margin based on object size
                if (planetX < -cullMargin || planetX > this.canvas.width + cullMargin || 
                    planetY < -cullMargin || planetY > this.canvas.height + cullMargin) {
                    return;
                }
                
                // Planet glow for Sun or hovered object
                if (planet.name === 'Sun' || planet === this.hoveredObject) {
                    const glowRadius = radius * (planet.name === 'Sun' ? 3 : 2);
                    const gradient = this.ctx.createRadialGradient(
                        planetX, planetY, 0,
                        planetX, planetY, glowRadius
                    );
                    gradient.addColorStop(0, (planet.glowColor || planet.color) + '60');
                    gradient.addColorStop(1, 'transparent');
                    
                    this.ctx.fillStyle = gradient;
                    this.ctx.fillRect(
                        planetX - glowRadius,
                        planetY - glowRadius,
                        glowRadius * 2,
                        glowRadius * 2
                    );
                }
                
                // Draw planet
                this.ctx.fillStyle = planet.color;
                this.ctx.beginPath();
                this.ctx.arc(planetX, planetY, radius, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Saturn's rings
                if (planet.hasRings && radius > 2) {
                    this.ctx.strokeStyle = '#DDBF94';
                    this.ctx.lineWidth = Math.max(1, 2 * Math.min(this.camera.zoom, 1));
                    this.ctx.beginPath();
                    this.ctx.ellipse(planetX, planetY, radius * 1.8, radius * 0.5, 0, 0, Math.PI * 2);
                    this.ctx.stroke();
                    
                    this.ctx.beginPath();
                    this.ctx.ellipse(planetX, planetY, radius * 2.2, radius * 0.6, 0, 0, Math.PI * 2);
                    this.ctx.stroke();
                }
                
                // Draw moons
                if (planet.moons && this.showMoons && planet.moons.length > 0) {
                    planet.moons.forEach(moon => {
                        const moonDistance = moon.realDistance / this.baseScale;
                        const moonX = planetX + Math.cos(moon.angle || 0) * moonDistance * this.camera.zoom;
                        const moonY = planetY + Math.sin(moon.angle || 0) * moonDistance * this.camera.zoom;
                        // FIXED: Better moon radius calculation
                        const moonRadius = Math.max(moon.realRadius / this.baseScale * this.camera.zoom, 1.0);
                        
                        // Moon orbit
                        if (this.showOrbits && moonDistance * this.camera.zoom > 5) {
                            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
                            this.ctx.lineWidth = 1;
                            this.ctx.beginPath();
                            this.ctx.arc(planetX, planetY, moonDistance * this.camera.zoom, 0, Math.PI * 2);
                            this.ctx.stroke();
                        }
                        
                        // Moon body
                        this.ctx.fillStyle = moon.color;
                        this.ctx.beginPath();
                        this.ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
                        this.ctx.fill();
                        
                        // Moon label - FIXED: Always show if zoomed enough, regardless of radius
                        if (this.showLabels && (this.camera.zoom > 5 || moon === this.hoveredObject)) {
                            this.renderLabel(moon.name, moonX, moonY + moonRadius + 12);
                        }
                    });
                }
                
                // Planet labels - FIXED: Show labels more liberally
                if (this.showLabels && (radius > 1.5 || planet === this.hoveredObject)) {
                    this.renderLabel(planet.name, planetX, planetY + Math.max(radius + 15, 25));
                    
                    // Show additional info when zoomed in
                    if (this.camera.zoom > 5) {
                        const infoText = `${planet.realRadius.toLocaleString()} km`;
                        this.renderLabel(infoText, planetX, planetY + Math.max(radius + 35, 45), '10px');
                    }
                }
            }

            renderObject(obj, centerX, centerY) {
                const elliptical = this.getEllipticalPosition(obj, obj.angle || 0);
                const objX = centerX + elliptical.x * elliptical.distance * this.camera.zoom;
                const objY = centerY + elliptical.y * elliptical.distance * this.camera.zoom;
                const radius = this.getObjectRadius(obj);
                
                // FIXED: More lenient bounds check
                const cullMargin = Math.max(1000, radius * 5);
                if (objX < -cullMargin || objX > this.canvas.width + cullMargin || 
                    objY < -cullMargin || objY > this.canvas.height + cullMargin) {
                    return;
                }
                
                this.ctx.fillStyle = obj.color;
                this.ctx.beginPath();
                this.ctx.arc(objX, objY, radius, 0, Math.PI * 2);
                this.ctx.fill();
                
                // FIXED: Show labels more liberally
                if (this.showLabels && (radius > 0.8 || obj === this.hoveredObject)) {
                    this.renderLabel(obj.name, objX, objY + radius + 12, '10px');
                }
            }

            renderComet(comet, centerX, centerY) {
                // Calculate position along elliptical orbit
                const a = (comet.aphelion + comet.perihelion) / 2 / this.baseScale;
                const e = comet.eccentricity;
                const b = a * Math.sqrt(1 - e * e);
                
                const cometX = centerX + Math.cos(comet.angle || 0) * a * this.camera.zoom;
                const cometY = centerY + Math.sin(comet.angle || 0) * b * this.camera.zoom;
                const radius = this.getObjectRadius(comet);
                
                // FIXED: More lenient bounds check
                const cullMargin = Math.max(1000, radius * 10);
                if (cometX < -cullMargin || cometX > this.canvas.width + cullMargin || 
                    cometY < -cullMargin || cometY > this.canvas.height + cullMargin) {
                    return;
                }
                
                // Draw comet nucleus
                this.ctx.fillStyle = comet.color;
                this.ctx.beginPath();
                this.ctx.arc(cometX, cometY, radius, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Draw comet tail (points away from sun)
                if (radius > 0.5) {
                    const sunAngle = Math.atan2(cometY - centerY, cometX - centerX);
                    const tailLength = Math.min(100, radius * 15); // FIXED: Better tail scaling
                    
                    const gradient = this.ctx.createLinearGradient(
                        cometX, cometY,
                        cometX + Math.cos(sunAngle) * tailLength,
                        cometY + Math.sin(sunAngle) * tailLength
                    );
                    gradient.addColorStop(0, comet.color + '80');
                    gradient.addColorStop(1, 'transparent');
                    
                    this.ctx.strokeStyle = gradient;
                    this.ctx.lineWidth = Math.max(1, radius * 2);
                    this.ctx.beginPath();
                    this.ctx.moveTo(cometX, cometY);
                    this.ctx.lineTo(
                        cometX + Math.cos(sunAngle) * tailLength,
                        cometY + Math.sin(sunAngle) * tailLength
                    );
                    this.ctx.stroke();
                }
                
                // FIXED: Show labels more liberally
                if (this.showLabels && (radius > 0.8 || comet === this.hoveredObject)) {
                    this.renderLabel(comet.name, cometX, cometY + radius + 12, '10px');
                }
            }

            renderSpacecraft(craft, centerX, centerY) {
                const distance = craft.realDistance / this.baseScale;
                const craftX = centerX + Math.cos(craft.angle || 0) * distance * this.camera.zoom;
                const craftY = centerY + Math.sin(craft.angle || 0) * distance * this.camera.zoom;
                
                // FIXED: More lenient bounds check
                const cullMargin = 1500;
                if (craftX < -cullMargin || craftX > this.canvas.width + cullMargin || 
                    craftY < -cullMargin || craftY > this.canvas.height + cullMargin) {
                    return;
                }
                
                // Draw spacecraft as a diamond
                // FIXED: Better size calculation for spacecraft
                const size = Math.max(3, 6 * Math.min(this.camera.zoom, 1));
                this.ctx.fillStyle = craft.color;
                this.ctx.beginPath();
                this.ctx.moveTo(craftX, craftY - size);
                this.ctx.lineTo(craftX + size, craftY);
                this.ctx.lineTo(craftX, craftY + size);
                this.ctx.lineTo(craftX - size, craftY);
                this.ctx.closePath();
                this.ctx.fill();
                
                // Draw trajectory line
                if (this.showOrbits) {
                    this.ctx.strokeStyle = craft.color + '40';
                    this.ctx.lineWidth = 1;
                    this.ctx.setLineDash([5, 5]);
                    this.ctx.beginPath();
                    this.ctx.moveTo(centerX, centerY);
                    this.ctx.lineTo(craftX, craftY);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                }
                
                // FIXED: Show labels more liberally for spacecraft
                if (this.showLabels && (size > 2 || craft === this.hoveredObject)) {
                    this.renderLabel(craft.name, craftX, craftY + size + 12, '10px');
                }
            }

            renderLabel(text, x, y, fontSize = '12px') {
                this.ctx.fillStyle = 'white';
                this.ctx.font = `${fontSize} Arial`;
                this.ctx.textAlign = 'center';
                this.ctx.strokeStyle = 'black';
                this.ctx.lineWidth = 2;
                this.ctx.strokeText(text, x, y);
                this.ctx.fillText(text, x, y);
            }
            
            renderStars() {
                this.ctx.fillStyle = 'white';
                for (let i = 0; i < 800; i++) {
                    const x = (i * 1337) % this.canvas.width;
                    const y = (i * 7331) % this.canvas.height;
                    const size = Math.sin(this.time * 10 + i) * 0.5 + 0.8;
                    
                    this.ctx.globalAlpha = 0.1 + Math.sin(this.time * 5 + i) * 0.15;
                    this.ctx.fillRect(x, y, size, size);
                }
                this.ctx.globalAlpha = 1;
            }
            
            renderScaleReference() {
                // Scale bar in bottom right
                const barWidth = 120;
                const barHeight = 25;
                const margin = 30;
                const x = this.canvas.width - barWidth - margin;
                const y = this.canvas.height - barHeight - margin * 2;
                
                // Calculate distance representation
                const kmPerPixel = this.baseScale / this.camera.zoom;
                const barRepresentsKm = barWidth * kmPerPixel;
                
                let distanceText;
                if (barRepresentsKm > 149600000) {
                    const au = barRepresentsKm / 149600000;
                    distanceText = `${au.toFixed(1)} AU`;
                } else if (barRepresentsKm > 1000000) {
                    const million = barRepresentsKm / 1000000;
                    distanceText = `${million.toFixed(1)}M km`;
                } else if (barRepresentsKm > 1000) {
                    const thousand = barRepresentsKm / 1000;
                    distanceText = `${thousand.toFixed(0)}k km`;
                } else {
                    distanceText = `${barRepresentsKm.toFixed(0)} km`;
                }
                
                // Draw scale bar background
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                this.ctx.fillRect(x - 15, y - 35, barWidth + 30, 60);
                
                // Draw scale bar
                this.ctx.fillStyle = 'white';
                this.ctx.fillRect(x, y, barWidth, 3);
                this.ctx.fillRect(x, y - 5, 2, 10);
                this.ctx.fillRect(x + barWidth - 2, y - 5, 2, 10);
                
                // Draw scale text
                this.ctx.fillStyle = 'white';
                this.ctx.font = '14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(distanceText, x + barWidth/2, y - 10);
                
                // Additional info
                this.ctx.font = '10px Arial';
                this.ctx.fillText(`1 px = ${(kmPerPixel/1000).toFixed(0)}k km`, x + barWidth/2, y + 18);
            }
            
            animate() {
                this.updateCamera();
                this.updateObjects();
                this.render();
                
                requestAnimationFrame(() => this.animate());
            }
        }
        
        // Initialize the enhanced solar system
        document.addEventListener('DOMContentLoaded', () => {
            new EnhancedSolarSystem();
        });