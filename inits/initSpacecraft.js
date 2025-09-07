export function initSpacecraft(system) {
    system.spacecraft = [
        // 🌍 Earth Orbit & Space Telescopes
        {
            name: 'Hubble Space Telescope',
            realDistance: 547,
            speed: 7.5,
            color: '#6495ED',
            angle: 0,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '1990',
            info: {
                mission: 'Space-based observatory',
                altitude: '547 km',
                orbitalPeriod: '95 minutes',
                discoveries: 'Hubble Deep Field, exoplanet atmospheres, dark energy'
            }
        },
        {
            name: 'James Webb Space Telescope',
            realDistance: 1500000,
            speed: 1,
            color: '#9370DB',
            angle: Math.PI,
            type: 'spacecraft',
            status: 'Active - L2 Point',
            launched: '2021',
            info: {
                mission: 'Infrared astronomy',
                location: 'Earth-Sun L2 point',
                mirrorSize: '6.5m',
                discoveries: 'Early universe galaxies, exoplanet characterization'
            }
        },
        {
            name: 'Chandra X-ray Observatory',
            realDistance: 133000,
            speed: 10,
            color: '#8A2BE2',
            angle: Math.PI * 0.4,
            type: 'spacecraft',
            status: 'Active - High Earth Orbit',
            launched: '1999',
            info: {
                mission: 'X-ray astronomy',
                discoveries: 'Black holes, galaxy clusters, dark matter'
            }
        },
        {
            name: 'Spitzer Space Telescope',
            realDistance: 0,
            speed: 0,
            color: '#FF69B4',
            angle: Math.PI * 0.6,
            type: 'spacecraft',
            status: 'Mission ended 2020',
            launched: '2003',
            info: {
                mission: 'Infrared astronomy',
                discoveries: 'Exoplanet atmospheres, star formation regions'
            }
        },
        {
            name: 'International Space Station',
            realDistance: 400,
            speed: 7.66,
            color: '#FFFFFF',
            angle: 0,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '1998',
            info: {
                mission: 'Space laboratory',
                altitude: '400 km',
                crew: 'Continuous since 2000'
            }
        },
        {
            name: 'Kepler Space Telescope',
            realDistance: 0,
            speed: 0,
            color: '#4169E1',
            angle: Math.PI * 1.3,
            type: 'spacecraft',
            status: 'Mission ended 2018',
            launched: '2009',
            info: {
                mission: 'Exoplanet hunting',
                discoveries: 'Over 2,600 confirmed exoplanets'
            }
        },
        {
            name: 'TESS (Transiting Exoplanet Survey Satellite)',
            realDistance: 375000,
            speed: 2,
            color: '#FF1493',
            angle: Math.PI * 0.9,
            type: 'spacecraft',
            status: 'Active - High Earth Orbit',
            launched: '2018',
            info: {
                mission: 'All-sky exoplanet survey',
                orbit: 'Highly elliptical Earth orbit'
            }
        },
        {
            name: 'Gaia',
            realDistance: 1500000,
            speed: 1,
            color: '#00CED1',
            angle: Math.PI * 1.1,
            type: 'spacecraft',
            status: 'Active - L2 Point',
            launched: '2013',
            info: {
                mission: 'Stellar positions and distances',
                discoveries: 'Most detailed 3D map of our galaxy'
            }
        },
        {
            name: 'Planck',
            realDistance: 0,
            speed: 0,
            color: '#DA70D6',
            angle: Math.PI * 1.7,
            type: 'spacecraft',
            status: 'Mission ended 2013',
            launched: '2009',
            info: {
                mission: 'Cosmic microwave background',
                discoveries: 'Precise age and composition of universe'
            }
        },
        {
            name: 'WMAP (Wilkinson Microwave Anisotropy Probe)',
            realDistance: 0,
            speed: 0,
            color: '#B8860B',
            angle: Math.PI * 1.9,
            type: 'spacecraft',
            status: 'Mission ended 2010',
            launched: '2001',
            info: {
                mission: 'Cosmic microwave background mapping',
                discoveries: 'Universe composition: 4% normal matter'
            }
        },
        {
            name: 'Fermi Gamma-ray Space Telescope',
            realDistance: 550,
            speed: 7.5,
            color: '#FF4500',
            angle: Math.PI * 0.1,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '2008',
            info: {
                mission: 'Gamma-ray astronomy',
                discoveries: 'Gamma-ray bursts, pulsars'
            }
        },
        {
            name: 'Euclid',
            realDistance: 1500000,
            speed: 1,
            color: '#4B0082',
            angle: Math.PI * 1.4,
            type: 'spacecraft',
            status: 'Active - L2 Point',
            launched: '2023',
            info: {
                mission: 'Dark matter and dark energy mapping',
                goal: 'Map billions of galaxies'
            }
        },

        // ☀️ Solar Missions
        {
            name: 'Parker Solar Probe',
            realDistance: 20000000,
            speed: 0.02,
            color: '#FF4500',
            angle: Math.PI * 1.5,
            type: 'spacecraft',
            status: 'Active - Solar Corona',
            launched: '2018',
            info: {
                mission: 'Study Sun\'s corona',
                closestApproach: '6.2 million km',
                fastestSpeed: '692,000 km/h'
            }
        },
        {
            name: 'SOHO (Solar and Heliospheric Observatory)',
            realDistance: 1500000,
            speed: 1,
            color: '#FFD700',
            angle: Math.PI * 0.8,
            type: 'spacecraft',
            status: 'Active - L1 Point',
            launched: '1995',
            info: {
                mission: 'Solar wind, CME detection',
                contribution: 'Real-time space weather monitoring'
            }
        },
        {
            name: 'Solar Orbiter',
            realDistance: 50000000,
            speed: 0.01,
            color: '#FF8C00',
            angle: Math.PI * 0.3,
            type: 'spacecraft',
            status: 'Active - Solar mission',
            launched: '2020',
            info: {
                mission: 'High-latitude solar studies',
                orbit: 'Elliptical, close solar passes'
            }
        },
        {
            name: 'Ulysses',
            realDistance: 0,
            speed: 0,
            color: '#FFA500',
            angle: Math.PI * 0.5,
            type: 'spacecraft',
            status: 'Mission ended 2009',
            launched: '1990',
            info: {
                mission: 'Solar polar regions study',
                achievement: 'First spacecraft over Sun\'s poles'
            }
        },
        {
            name: 'STEREO-A',
            realDistance: 149600000,
            speed: 0.001,
            color: '#FF6347',
            angle: Math.PI * 0.2,
            type: 'spacecraft',
            status: 'Active - Solar orbit',
            launched: '2006',
            info: {
                mission: '3D solar observations',
                twin: 'STEREO-B (contact lost 2014)'
            }
        },

        // 🌑 Moon Missions
        {
            name: 'Apollo Lunar Module (Historic)',
            realDistance: 384400,
            speed: 0.001,
            color: '#C0C0C0',
            angle: Math.PI * 0.7,
            type: 'spacecraft',
            status: 'Historic - 1969 to 1972',
            launched: '1969',
            info: {
                mission: 'Crewed lunar landing',
                flights: 'Apollo 11–17'
            }
        },
        {
            name: 'Lunar Reconnaissance Orbiter (LRO)',
            realDistance: 384400,
            speed: 1.6,
            color: '#DCDCDC',
            angle: Math.PI * 0.2,
            type: 'spacecraft',
            status: 'Active - Lunar Orbit',
            launched: '2009',
            info: {
                mission: 'High-resolution lunar mapping',
                discoveries: 'Detailed lunar surface features'
            }
        },
        {
            name: 'Artemis I (Orion Capsule)',
            realDistance: 384400,
            speed: 0.001,
            color: '#F5F5F5',
            angle: Math.PI * 0.3,
            type: 'spacecraft',
            status: 'Mission completed 2022',
            launched: '2022',
            info: {
                mission: 'Uncrewed lunar test flight',
                duration: '25.5 days'
            }
        },
        {
            name: 'Chang\'e 3',
            realDistance: 384400,
            speed: 0.001,
            color: '#DC143C',
            angle: Math.PI * 0.4,
            type: 'spacecraft',
            status: 'Mission ended 2016',
            launched: '2013',
            info: {
                mission: 'Chinese lunar lander + Yutu rover',
                achievement: 'First soft landing since 1976'
            }
        },
        {
            name: 'Chang\'e 4',
            realDistance: 384400,
            speed: 0.001,
            color: '#B22222',
            angle: Math.PI * 0.45,
            type: 'spacecraft',
            status: 'Active - Lunar Surface',
            launched: '2018',
            info: {
                mission: 'First far side lunar landing',
                rover: 'Yutu-2'
            }
        },
        {
            name: 'Chang\'e 5',
            realDistance: 0,
            speed: 0,
            color: '#8B0000',
            angle: Math.PI * 0.5,
            type: 'spacecraft',
            status: 'Mission completed 2020',
            launched: '2020',
            info: {
                mission: 'Lunar sample return',
                achievement: '1.7 kg of lunar samples returned'
            }
        },
        {
            name: 'Chandrayaan-1',
            realDistance: 0,
            speed: 0,
            color: '#FF8C00',
            angle: Math.PI * 0.55,
            type: 'spacecraft',
            status: 'Mission ended 2009',
            launched: '2008',
            info: {
                mission: 'Indian lunar orbiter',
                discovery: 'Water ice at lunar poles'
            }
        },
        {
            name: 'Chandrayaan-3',
            realDistance: 384400,
            speed: 0.001,
            color: '#FF4500',
            angle: Math.PI * 0.6,
            type: 'spacecraft',
            status: 'Active - Lunar Surface',
            launched: '2023',
            info: {
                mission: 'Indian lunar south pole landing',
                rover: 'Pragyan'
            }
        },
        {
            name: 'SMART-1',
            realDistance: 0,
            speed: 0,
            color: '#4682B4',
            angle: Math.PI * 0.65,
            type: 'spacecraft',
            status: 'Mission ended 2006',
            launched: '2003',
            info: {
                mission: 'ESA lunar orbiter',
                propulsion: 'Ion drive technology demonstration'
            }
        },
        {
            name: 'LCROSS',
            realDistance: 0,
            speed: 0,
            color: '#708090',
            angle: Math.PI * 0.7,
            type: 'spacecraft',
            status: 'Mission ended 2009',
            launched: '2009',
            info: {
                mission: 'Lunar impact probe',
                discovery: 'Confirmed water ice in lunar craters'
            }
        },

        // 🔴 Mars Missions
        {
            name: 'Viking 1',
            realDistance: 227900000,
            speed: 0.00001,
            color: '#A0522D',
            angle: Math.PI * 0.4,
            type: 'spacecraft',
            status: 'Mission ended 1982',
            launched: '1975',
            info: {
                mission: 'First successful Mars lander'
            }
        },
        {
            name: 'Viking 2',
            realDistance: 227900000,
            speed: 0.00001,
            color: '#CD853F',
            angle: Math.PI * 0.6,
            type: 'spacecraft',
            status: 'Mission ended 1980',
            launched: '1975',
            info: {
                mission: 'Mars orbiter + lander'
            }
        },
        {
            name: 'Pathfinder & Sojourner',
            realDistance: 227900000,
            speed: 0.00001,
            color: '#B22222',
            angle: Math.PI * 0.8,
            type: 'spacecraft',
            status: 'Mission ended 1997',
            launched: '1996',
            info: {
                mission: 'First Mars rover (Sojourner)'
            }
        },
        {
            name: 'Spirit Rover',
            realDistance: 227900000,
            speed: 0.00001,
            color: '#FF7F50',
            angle: Math.PI,
            type: 'spacecraft',
            status: 'Mission ended 2011',
            launched: '2003',
            info: {
                mission: 'Mars exploration rover',
                discoveries: 'Evidence of past water'
            }
        },
        {
            name: 'Opportunity Rover',
            realDistance: 227900000,
            speed: 0.00001,
            color: '#FF6347',
            angle: Math.PI * 1.2,
            type: 'spacecraft',
            status: 'Mission ended 2019',
            launched: '2003',
            info: {
                mission: 'Mars exploration rover',
                duration: '15 years'
            }
        },
        {
            name: 'Curiosity Rover',
            realDistance: 227900000,
            speed: 0.00001,
            color: '#DA70D6',
            angle: Math.PI,
            type: 'spacecraft',
            status: 'Active - Mars Surface',
            launched: '2011',
            info: {
                mission: 'Mars habitability studies',
                discoveries: 'Evidence of ancient lakes'
            }
        },
        {
            name: 'Perseverance Rover',
            realDistance: 227900000,
            speed: 0.00001,
            color: '#FF8C00',
            angle: Math.PI,
            type: 'spacecraft',
            status: 'Active - Mars Surface',
            launched: '2020',
            info: {
                mission: 'Astrobiology & sample caching',
                companion: 'Ingenuity helicopter'
            }
        },
        {
            name: 'Mars Reconnaissance Orbiter (MRO)',
            realDistance: 227900000,
            speed: 0.0001,
            color: '#4682B4',
            angle: Math.PI * 0.2,
            type: 'spacecraft',
            status: 'Active - Mars Orbit',
            launched: '2005',
            info: {
                mission: 'High-resolution mapping',
                instrument: 'HiRISE camera'
            }
        },
        {
            name: 'MAVEN',
            realDistance: 227900000,
            speed: 0.0001,
            color: '#6A5ACD',
            angle: Math.PI * 0.4,
            type: 'spacecraft',
            status: 'Active - Mars Orbit',
            launched: '2013',
            info: {
                mission: 'Study Mars atmosphere & loss'
            }
        },
        {
            name: 'Mars Global Surveyor',
            realDistance: 227900000,
            speed: 0.0001,
            color: '#8B4513',
            angle: Math.PI * 0.3,
            type: 'spacecraft',
            status: 'Mission ended 2006',
            launched: '1996',
            info: {
                mission: 'Global mapping of Mars',
                discoveries: 'Evidence of ancient water flow'
            }
        },
        {
            name: 'Mars Express',
            realDistance: 227900000,
            speed: 0.0001,
            color: '#4169E1',
            angle: Math.PI * 0.5,
            type: 'spacecraft',
            status: 'Active - Mars Orbit',
            launched: '2003',
            info: {
                mission: 'ESA Mars orbiter',
                instruments: 'MARSIS radar, spectrometers'
            }
        },
        {
            name: 'ExoMars Trace Gas Orbiter',
            realDistance: 227900000,
            speed: 0.0001,
            color: '#32CD32',
            angle: Math.PI * 0.6,
            type: 'spacecraft',
            status: 'Active - Mars Orbit',
            launched: '2016',
            info: {
                mission: 'Search for methane and trace gases',
                collaboration: 'ESA-Roscosmos'
            }
        },
        {
            name: 'Tianwen-1',
            realDistance: 227900000,
            speed: 0.00001,
            color: '#DC143C',
            angle: Math.PI * 0.7,
            type: 'spacecraft',
            status: 'Active - Mars Orbit & Surface',
            launched: '2020',
            info: {
                mission: 'Chinese Mars orbiter + Zhurong rover',
                achievement: 'China\'s first successful Mars mission'
            }
        },
        {
            name: 'Mars Odyssey',
            realDistance: 227900000,
            speed: 0.0001,
            color: '#FF69B4',
            angle: Math.PI * 0.8,
            type: 'spacecraft',
            status: 'Active - Mars Orbit',
            launched: '2001',
            info: {
                mission: 'Orbital survey and communications relay',
                record: 'Longest-serving Mars spacecraft'
            }
        },
        {
            name: 'InSight Lander',
            realDistance: 227900000,
            speed: 0.00001,
            color: '#8A2BE2',
            angle: Math.PI * 1.1,
            type: 'spacecraft',
            status: 'Mission ended 2022',
            launched: '2018',
            info: {
                mission: 'Mars interior structure study',
                instruments: 'Seismometer, heat probe'
            }
        },
        {
            name: 'Phoenix Lander',
            realDistance: 227900000,
            speed: 0.00001,
            color: '#FF7F50',
            angle: Math.PI * 1.3,
            type: 'spacecraft',
            status: 'Mission ended 2008',
            launched: '2007',
            info: {
                mission: 'Mars arctic soil analysis',
                discovery: 'Water ice in Martian soil'
            }
        },

        // 🌌 Outer Planets & Interstellar
        {
            name: 'Voyager 1',
            realDistance: 23700000000,
            speed: 0.0005,
            color: '#FFD700',
            angle: Math.PI * 0.2,
            type: 'spacecraft',
            status: 'Active - Interstellar Space',
            launched: '1977',
            info: {
                mission: 'Farthest human-made object',
                achievement: 'First spacecraft in interstellar space'
            }
        },
        {
            name: 'Voyager 2',
            realDistance: 19700000000,
            speed: 0.0005,
            color: '#FFD700',
            angle: Math.PI * 1.8,
            type: 'spacecraft',
            status: 'Active - Interstellar Space',
            launched: '1977',
            info: {
                mission: 'Only probe to visit Uranus & Neptune',
                achievement: 'Grand Tour of outer planets'
            }
        },
        {
            name: 'Pioneer 10',
            realDistance: 12200000000,
            speed: 0.0005,
            color: '#FFDEAD',
            angle: Math.PI * 1.2,
            type: 'spacecraft',
            status: 'Mission ended 2003',
            launched: '1972',
            info: {
                mission: 'First probe to cross asteroid belt',
                plaque: 'Carries message for extraterrestrials'
            }
        },
        {
            name: 'Pioneer 11',
            realDistance: 10500000000,
            speed: 0.0005,
            color: '#DEB887',
            angle: Math.PI * 1.4,
            type: 'spacecraft',
            status: 'Mission ended 1995',
            launched: '1973',
            info: {
                mission: 'Explored Jupiter & Saturn'
            }
        },
        {
            name: 'Cassini-Huygens',
            realDistance: 0,
            speed: 0,
            color: '#00BFFF',
            angle: Math.PI * 1.2,
            type: 'spacecraft',
            status: 'Mission ended 2017',
            launched: '1997',
            info: {
                mission: 'Saturn orbiter + Titan lander',
                achievement: '13 years studying Saturn system'
            }
        },
        {
            name: 'Galileo',
            realDistance: 0,
            speed: 0,
            color: '#20B2AA',
            angle: Math.PI * 0.5,
            type: 'spacecraft',
            status: 'Mission ended 2003',
            launched: '1989',
            info: {
                mission: 'Jupiter exploration',
                discoveries: 'Europa subsurface ocean'
            }
        },
        {
            name: 'Juno',
            realDistance: 778500000,
            speed: 0.0002,
            color: '#1E90FF',
            angle: Math.PI * 0.7,
            type: 'spacecraft',
            status: 'Active - Jupiter Orbit',
            launched: '2011',
            info: {
                mission: 'Study Jupiter interior & magnetosphere'
            }
        },
        {
            name: 'New Horizons',
            realDistance: 7500000000,
            speed: 0.0008,
            color: '#FF6347',
            angle: Math.PI * 0.9,
            type: 'spacecraft',
            status: 'Active - Kuiper Belt',
            launched: '2006',
            info: {
                mission: 'First Pluto flyby, KBO exploration',
                discoveries: 'Detailed images of Pluto system'
            }
        },

        // 🪐 More Outer Planet Missions
        {
            name: 'JUICE (Jupiter Icy Moons Explorer)',
            realDistance: 200000000,
            speed: 0.00005,
            color: '#00FA9A',
            angle: Math.PI * 1.3,
            type: 'spacecraft',
            status: 'En route to Jupiter',
            launched: '2023',
            info: {
                mission: 'Study Jupiter\'s icy moons',
                targets: 'Ganymede, Callisto, Europa'
            }
        },
        {
            name: 'Europa Clipper',
            realDistance: 150000000,
            speed: 0.00005,
            color: '#87CEEB',
            angle: Math.PI * 1.4,
            type: 'spacecraft',
            status: 'En route to Jupiter',
            launched: '2024',
            info: {
                mission: 'Study Europa\'s habitability',
                goal: 'Analyze subsurface ocean'
            }
        },
        {
            name: 'Dragonfly',
            realDistance: 100000000,
            speed: 0.00005,
            color: '#FF1493',
            angle: Math.PI * 1.5,
            type: 'spacecraft',
            status: 'Planned - Launch 2028',
            launched: 'Future',
            info: {
                mission: 'Titan rotorcraft lander',
                unique: 'Flying drone on Titan'
            }
        },

        // 🌟 Asteroid & Comet Missions
        {
            name: 'DART',
            realDistance: 0,
            speed: 0,
            color: '#32CD32',
            angle: Math.PI * 0.5,
            type: 'spacecraft',
            status: 'Mission completed 2022',
            launched: '2021',
            info: {
                mission: 'Planetary defense asteroid impact test',
                target: 'Dimorphos asteroid'
            }
        },
        {
            name: 'OSIRIS-REx',
            realDistance: 149600000,
            speed: 0.0001,
            color: '#FFD700',
            angle: Math.PI * 0.3,
            type: 'spacecraft',
            status: 'Sample returned 2023',
            launched: '2016',
            info: {
                mission: 'Asteroid Bennu sample return',
                achievement: '60g of asteroid material returned'
            }
        },
        {
            name: 'Hayabusa',
            realDistance: 0,
            speed: 0,
            color: '#FF4500',
            angle: Math.PI * 1.6,
            type: 'spacecraft',
            status: 'Mission completed 2010',
            launched: '2003',
            info: {
                mission: 'First asteroid sample return',
                target: 'Asteroid Itokawa'
            }
        },
        {
            name: 'Hayabusa2',
            realDistance: 0,
            speed: 0,
            color: '#FF6347',
            angle: Math.PI * 1.7,
            type: 'spacecraft',
            status: 'Mission completed 2020',
            launched: '2014',
            info: {
                mission: 'Asteroid Ryugu sample return',
                achievement: '5.4g samples returned'
            }
        },
        {
            name: 'Rosetta',
            realDistance: 0,
            speed: 0,
            color: '#9370DB',
            angle: Math.PI * 1.8,
            type: 'spacecraft',
            status: 'Mission ended 2016',
            launched: '2004',
            info: {
                mission: 'Comet 67P orbiter + Philae lander',
                first: 'First comet orbit and soft landing'
            }
        },
        {
            name: 'Deep Impact',
            realDistance: 0,
            speed: 0,
            color: '#B22222',
            angle: Math.PI * 1.9,
            type: 'spacecraft',
            status: 'Mission ended 2013',
            launched: '2005',
            info: {
                mission: 'Comet Tempel 1 impactor study',
                achievement: 'First deliberate comet impact'
            }
        },
        {
            name: 'Stardust',
            realDistance: 0,
            speed: 0,
            color: '#FFB6C1',
            angle: Math.PI * 0.1,
            type: 'spacecraft',
            status: 'Mission completed 2011',
            launched: '1999',
            info: {
                mission: 'Comet Wild 2 sample return',
                first: 'First comet dust samples returned'
            }
        },
        {
            name: 'Dawn',
            realDistance: 0,
            speed: 0,
            color: '#778899',
            angle: Math.PI * 0.15,
            type: 'spacecraft',
            status: 'Mission ended 2018',
            launched: '2007',
            info: {
                mission: 'Vesta and Ceres orbiter',
                propulsion: 'Ion drive to two asteroids'
            }
        },
        {
            name: 'NEAR Shoemaker',
            realDistance: 0,
            speed: 0,
            color: '#CD5C5C',
            angle: Math.PI * 0.2,
            type: 'spacecraft',
            status: 'Mission ended 2001',
            launched: '1996',
            info: {
                mission: 'Asteroid Eros orbiter and lander',
                first: 'First asteroid orbiter'
            }
        },

        // 🌍 Earth Science & Weather Satellites
        {
            name: 'Landsat 9',
            realDistance: 705,
            speed: 6.8,
            color: '#228B22',
            angle: Math.PI * 0.25,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '2021',
            info: {
                mission: 'Earth observation and land monitoring',
                series: 'Latest in 50+ year Landsat program'
            }
        },
        {
            name: 'Sentinel-1A',
            realDistance: 693,
            speed: 6.9,
            color: '#4169E1',
            angle: Math.PI * 0.3,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '2014',
            info: {
                mission: 'Radar Earth observation',
                program: 'Copernicus/ESA'
            }
        },
        {
            name: 'GOES-16',
            realDistance: 35786,
            speed: 3.07,
            color: '#FF4500',
            angle: Math.PI * 0.35,
            type: 'spacecraft',
            status: 'Active - Geostationary Orbit',
            launched: '2016',
            info: {
                mission: 'Weather monitoring',
                coverage: 'Americas weather observation'
            }
        },
        {
            name: 'Terra',
            realDistance: 705,
            speed: 6.8,
            color: '#8FBC8F',
            angle: Math.PI * 0.4,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '1999',
            info: {
                mission: 'Earth climate and environment',
                instruments: 'MODIS, ASTER, MISR'
            }
        },
        {
            name: 'Aqua',
            realDistance: 705,
            speed: 6.8,
            color: '#00BFFF',
            angle: Math.PI * 0.45,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '2002',
            info: {
                mission: 'Earth\'s water cycle monitoring',
                focus: 'Oceans, water vapor, clouds'
            }
        },

        // 🚀 Historic Human Spaceflight
        {
            name: 'Vostok 1 (Gagarin)',
            realDistance: 0,
            speed: 0,
            color: '#FF0000',
            angle: Math.PI * 0.5,
            type: 'spacecraft',
            status: 'Historic - First human in space',
            launched: '1961',
            info: {
                mission: 'First human spaceflight',
                pilot: 'Yuri Gagarin',
                duration: '108 minutes'
            }
        },
        {
            name: 'Mercury-Redstone 3 (Freedom 7)',
            realDistance: 0,
            speed: 0,
            color: '#0000FF',
            angle: Math.PI * 0.55,
            type: 'spacecraft',
            status: 'Historic - First American in space',
            launched: '1961',
            info: {
                mission: 'First US human spaceflight',
                pilot: 'Alan Shepard',
                type: 'Suborbital flight'
            }
        },
        {
            name: 'Gemini 4',
            realDistance: 0,
            speed: 0,
            color: '#4169E1',
            angle: Math.PI * 0.6,
            type: 'spacecraft',
            status: 'Historic - First US spacewalk',
            launched: '1965',
            info: {
                mission: 'First American EVA',
                astronaut: 'Ed White spacewalk'
            }
        },
        {
            name: 'Soyuz 11',
            realDistance: 0,
            speed: 0,
            color: '#8B0000',
            angle: Math.PI * 0.65,
            type: 'spacecraft',
            status: 'Historic tragedy - 1971',
            launched: '1971',
            info: {
                mission: 'First space station crew',
                tragedy: 'Crew lost during reentry'
            }
        },
        {
            name: 'Space Shuttle Columbia',
            realDistance: 0,
            speed: 0,
            color: '#FFFFFF',
            angle: Math.PI * 0.7,
            type: 'spacecraft',
            status: 'Historic - First shuttle flight',
            launched: '1981',
            info: {
                mission: 'First reusable spacecraft',
                flights: '28 missions 1981-2003'
            }
        },

        // 🛰️ Communication & Navigation Satellites
        {
            name: 'GPS IIF-12',
            realDistance: 20200,
            speed: 3.87,
            color: '#32CD32',
            angle: Math.PI * 0.75,
            type: 'spacecraft',
            status: 'Active - GPS Constellation',
            launched: '2016',
            info: {
                mission: 'Global positioning',
                constellation: 'Part of 24+ satellite GPS network'
            }
        },
        {
            name: 'Galileo FOC-1',
            realDistance: 23222,
            speed: 3.6,
            color: '#4169E1',
            angle: Math.PI * 0.8,
            type: 'spacecraft',
            status: 'Active - Galileo Navigation',
            launched: '2014',
            info: {
                mission: 'European navigation system',
                accuracy: 'Higher precision than GPS'
            }
        },
        {
            name: 'BeiDou-3 M1',
            realDistance: 21528,
            speed: 3.8,
            color: '#FF0000',
            angle: Math.PI * 0.85,
            type: 'spacecraft',
            status: 'Active - BeiDou Constellation',
            launched: '2018',
            info: {
                mission: 'Chinese navigation system',
                coverage: 'Global navigation services'
            }
        },

        // 🔬 Space Physics & Astronomy Missions
        {
            name: 'Van Allen Probes',
            realDistance: 30000,
            speed: 5,
            color: '#FF69B4',
            angle: Math.PI * 0.9,
            type: 'spacecraft',
            status: 'Mission ended 2019',
            launched: '2012',
            info: {
                mission: 'Study Earth\'s radiation belts',
                discovery: 'Third radiation belt around Earth'
            }
        },
        {
            name: 'Cluster II',
            realDistance: 119000,
            speed: 2,
            color: '#8A2BE2',
            angle: Math.PI * 0.95,
            type: 'spacecraft',
            status: 'Active - Earth Magnetosphere',
            launched: '2000',
            info: {
                mission: '3D study of Earth\'s magnetosphere',
                formation: '4 identical spacecraft'
            }
        },
        {
            name: 'THEMIS',
            realDistance: 80000,
            speed: 3,
            color: '#FF1493',
            angle: Math.PI * 1.0,
            type: 'spacecraft',
            status: 'Active - Earth Magnetosphere',
            launched: '2007',
            info: {
                mission: 'Aurora and magnetic substorm study',
                constellation: '5 spacecraft mission'
            }
        },
        {
            name: 'ACE (Advanced Composition Explorer)',
            realDistance: 1500000,
            speed: 1,
            color: '#FFD700',
            angle: Math.PI * 1.05,
            type: 'spacecraft',
            status: 'Active - L1 Point',
            launched: '1997',
            info: {
                mission: 'Solar wind monitoring',
                warning: 'Space weather early warning'
            }
        },
        {
            name: 'WIND',
            realDistance: 1500000,
            speed: 1,
            color: '#87CEEB',
            angle: Math.PI * 1.1,
            type: 'spacecraft',
            status: 'Active - L1 Point',
            launched: '1994',
            info: {
                mission: 'Solar wind properties',
                longevity: '30+ years of operation'
            }
        },

        // 🌊 Ocean & Climate Monitoring
        {
            name: 'Jason-3',
            realDistance: 1336,
            speed: 6.4,
            color: '#4682B4',
            angle: Math.PI * 1.15,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '2016',
            info: {
                mission: 'Ocean altimetry',
                purpose: 'Sea level rise monitoring'
            }
        },
        {
            name: 'GRACE-FO',
            realDistance: 490,
            speed: 7.4,
            color: '#20B2AA',
            angle: Math.PI * 1.2,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '2018',
            info: {
                mission: 'Earth gravity field mapping',
                method: 'Twin satellite gravitometry'
            }
        },
        {
            name: 'OCO-2',
            realDistance: 705,
            speed: 6.8,
            color: '#228B22',
            angle: Math.PI * 1.25,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '2014',
            info: {
                mission: 'Atmospheric CO2 monitoring',
                precision: 'Carbon dioxide global mapping'
            }
        },

        // ☄️ Deep Space & Interplanetary
        {
            name: 'Helios 1',
            realDistance: 0,
            speed: 0,
            color: '#FF4500',
            angle: Math.PI * 1.3,
            type: 'spacecraft',
            status: 'Mission ended 1985',
            launched: '1974',
            info: {
                mission: 'Solar approach record holder',
                achievement: 'Closest solar approach until Parker'
            }
        },
        {
            name: 'Helios 2',
            realDistance: 0,
            speed: 0,
            color: '#FF6347',
            angle: Math.PI * 1.35,
            type: 'spacecraft',
            status: 'Mission ended 1980',
            launched: '1976',
            info: {
                mission: 'Solar wind and plasma study',
                speed: 'Fastest spacecraft until Parker'
            }
        },
        {
            name: 'MESSENGER',
            realDistance: 0,
            speed: 0,
            color: '#FFD700',
            angle: Math.PI * 1.4,
            type: 'spacecraft',
            status: 'Mission ended 2015',
            launched: '2004',
            info: {
                mission: 'Mercury orbiter',
                discoveries: 'Water ice at Mercury poles'
            }
        },
        {
            name: 'BepiColombo',
            realDistance: 80000000,
            speed: 0.00002,
            color: '#FFA500',
            angle: Math.PI * 1.45,
            type: 'spacecraft',
            status: 'En route to Mercury',
            launched: '2018',
            info: {
                mission: 'ESA-JAXA Mercury mission',
                arrival: 'Mercury orbit 2025'
            }
        },
        {
            name: 'Magellan',
            realDistance: 0,
            speed: 0,
            color: '#8B4513',
            angle: Math.PI * 1.5,
            type: 'spacecraft',
            status: 'Mission ended 1994',
            launched: '1989',
            info: {
                mission: 'Venus radar mapping',
                achievement: '98% of Venus surface mapped'
            }
        },
        {
            name: 'Venus Express',
            realDistance: 0,
            speed: 0,
            color: '#FF69B4',
            angle: Math.PI * 1.55,
            type: 'spacecraft',
            status: 'Mission ended 2014',
            launched: '2005',
            info: {
                mission: 'Venus atmosphere study',
                duration: '8 years in Venus orbit'
            }
        },
        {
            name: 'Akatsuki',
            realDistance: 108200000,
            speed: 0.00003,
            color: '#FF1493',
            angle: Math.PI * 1.6,
            type: 'spacecraft',
            status: 'Active - Venus Orbit',
            launched: '2010',
            info: {
                mission: 'Japanese Venus climate orbiter',
                resilience: 'Recovered from failed insertion'
            }
        },

        // 🛸 Future & Planned Missions
        {
            name: 'Artemis II',
            realDistance: 0,
            speed: 0,
            color: '#C0C0C0',
            angle: Math.PI * 1.65,
            type: 'spacecraft',
            status: 'Planned - Crewed lunar flyby',
            launched: 'Future 2025',
            info: {
                mission: 'First crewed lunar mission since Apollo',
                crew: '4 astronauts lunar flyby'
            }
        },
        {
            name: 'Roman Space Telescope',
            realDistance: 1500000,
            speed: 1,
            color: '#9370DB',
            angle: Math.PI * 1.7,
            type: 'spacecraft',
            status: 'Planned - Launch 2027',
            launched: 'Future',
            info: {
                mission: 'Dark energy and exoplanet survey',
                capability: '100x Hubble\'s field of view'
            }
        },
        {
            name: 'Psyche',
            realDistance: 200000000,
            speed: 0.00005,
            color: '#708090',
            angle: Math.PI * 1.75,
            type: 'spacecraft',
            status: 'En route to asteroid',
            launched: '2023',
            info: {
                mission: 'Metal asteroid exploration',
                target: '16 Psyche asteroid'
            }
        },
        {
            name: 'Lucy',
            realDistance: 300000000,
            speed: 0.00003,
            color: '#DAA520',
            angle: Math.PI * 1.8,
            type: 'spacecraft',
            status: 'En route to Trojan asteroids',
            launched: '2021',
            info: {
                mission: 'Jupiter Trojan asteroid tour',
                targets: '8 asteroids over 12 years'
            }
        },
        {
            name: 'VERITAS',
            realDistance: 0,
            speed: 0,
            color: '#FF4500',
            angle: Math.PI * 1.85,
            type: 'spacecraft',
            status: 'Planned - Venus mission',
            launched: 'Future',
            info: {
                mission: 'Venus surface and interior mapping',
                radar: 'High-resolution Venus radar'
            }
        },

        // 🌟 Additional Space Telescopes & Observatories
        {
            name: 'IXPE',
            realDistance: 600,
            speed: 7.6,
            color: '#8A2BE2',
            angle: Math.PI * 1.9,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '2021',
            info: {
                mission: 'X-ray polarimetry',
                unique: 'First space X-ray polarimeter'
            }
        },
        {
            name: 'NuSTAR',
            realDistance: 600,
            speed: 7.6,
            color: '#FF00FF',
            angle: Math.PI * 1.95,
            type: 'spacecraft',
            status: 'Active - Earth Orbit',
            launched: '2012',
            info: {
                mission: 'Hard X-ray astronomy',
                focus: 'Black holes and supernovae'
            }
        }
    ];
}