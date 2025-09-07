    export function initAsteroids(system) {
                system.asteroids = [
                    { name: 'Ceres', realRadius: 473, realDistance: 413700000, speed: 0.15, color: '#C0C0C0', angle: 0, type: 'asteroid' },
                    { name: 'Vesta', realRadius: 262.7, realDistance: 353400000, speed: 0.19, color: '#8C7853', angle: Math.PI * 0.3, type: 'asteroid' },
                    { name: 'Pallas', realRadius: 256, realDistance: 414500000, speed: 0.14, color: '#A0A0A0', angle: Math.PI * 0.7, type: 'asteroid' },
                    { name: 'Hygiea', realRadius: 217, realDistance: 470300000, speed: 0.11, color: '#696969', angle: Math.PI * 1.2, type: 'asteroid' }
                ];

                // Generate belt asteroids
                for (let i = 0; i < 500; i++) {
                    const distance = 280000000 + Math.random() * 200000000; // 2.8 - 4.8 AU
                    this.asteroids.push({
                        name: `Asteroid ${i + 5}`,
                        realRadius: 0.5 + Math.random() * 10,
                        realDistance: distance,
                        speed: 0.1 + Math.random() * 0.1,
                        color: '#666666',
                        angle: Math.random() * Math.PI * 2,
                        type: 'asteroid'
                    });
                }
            }