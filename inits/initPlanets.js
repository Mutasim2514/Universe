    export function initPlanets(system) {
                // Enhanced planet data with orbital elements
                system.planets = [
                    {
                        name: 'Sun',
                        realRadius: 696340,
                        realDistance: 0,
                        speed: 0,
                        color: '#FDB813',
                        glowColor: '#FF8C00',
                        angle: 0,
                        eccentricity: 0,
                        type: 'star',
                        moons: [],
                        info: {
                            type: 'G-type Star',
                            diameter: '1,392,700 km',
                            mass: '1.989 × 10³⁰ kg',
                            temperature: '5,778 K',
                            age: '4.6 billion years'
                        }
                    },
                    {
                        name: 'Mercury',
                        realRadius: 2440,
                        realDistance: 57900000,
                        speed: 4.1,
                        color: '#8C7853',
                        angle: 0,
                        eccentricity: 0.206, // Most eccentric planet
                        type: 'terrestrial',
                        moons: [],
                          path: {
                                a: 57900000,
                                e: 0.2056,
                                i: 7.0,
                                omega: 48.331,
                                w: 29.124
                              },
                        info: {
                            type: 'Terrestrial Planet',
                            diameter: '4,879 km',
                            mass: '3.30 × 10²³ kg',
                            day: '58.6 Earth days',
                            year: '88 Earth days',
                            temperature: '-173°C to 427°C'
                        }
                    },
                    {
                        name: 'Venus',
                        realRadius: 6052,
                        realDistance: 108200000,
                        speed: 1.6,
                        angle: 0,
                        color: '#FFC649',
                        eccentricity: 0.007,
                        type: 'terrestrial',
                        moons: [],
                        path: {
                              a: 108200000,
                              e: 0.0068,
                              i: 3.39,
                              omega: 76.680,
                              w: 54.884
                              },
                        info: {
                            type: 'Terrestrial Planet',
                            diameter: '12,104 km',
                            mass: '4.87 × 10²⁴ kg',
                            day: '243 Earth days (retrograde)',
                            year: '225 Earth days',
                            temperature: '462°C average'
                        }
                    },
                    {
                        name: 'Earth',
                        realRadius: 6371,
                        realDistance: 149600000,
                        speed: 1,
                        angle: 0,
                        color: '#6B93D6',
                        secondaryColor: '#4F7942',
                        eccentricity: 0.017,
                        type: 'terrestrial',
                        moons: [
                            {
                                name: 'Moon',
                                realRadius: 1737,
                                realDistance: 384400,
                                speed: 13.2,
                                color: '#C0C0C0',
                                angle: 0
                            }
                        ],
                        path: {
                              a: 149600000,
                              e: 0.0167,
                              i: 0,
                              omega: -11.26064,
                              w: 114.20783
                              },
                        info: {
                            type: 'Terrestrial Planet',
                            diameter: '12,756 km',
                            mass: '5.97 × 10²⁴ kg',
                            day: '24 hours',
                            year: '365.25 days',
                            temperature: '-89°C to 58°C'
                        }
                    },
                    {
                        name: 'Mars',
                        realRadius: 3390,
                        realDistance: 227900000,
                        speed: 0.5,
                        color: '#CD5C5C',
                        angle: 0,
                        eccentricity: 0.093,
                        type: 'terrestrial',
                        moons: [
                            {
                                name: 'Phobos',
                                realRadius: 11.3,
                                realDistance: 9376,
                                speed: 1126.3,
                                color: '#8B7355',
                                angle: 0
                            },
                            {
                                name: 'Deimos',
                                realRadius: 6.2,
                                realDistance: 23463,
                                speed: 285.9,
                                color: '#696969',
                                angle: Math.PI
                            }
                        ],
                        path: {
                            a: 227900000,
                            e: 0.0935,
                            i: 1.85,
                            omega: 49.558,
                            w: 286.502
                            },
                        info: {
                            type: 'Terrestrial Planet',
                            diameter: '6,792 km',
                            mass: '6.42 × 10²³ kg',
                            day: '24.6 hours',
                            year: '687 Earth days',
                            temperature: '-87°C to -5°C'
                        }
                    },
                    {
    name: 'Jupiter',
    realRadius: 69911,
    realDistance: 778500000,
    speed: 0.08,
    angle: 0,
    color: '#D8CA9D',
    secondaryColor: '#B8860B',
    eccentricity: 0.049,
    type: 'gas-giant',
    moons: (function() {
        // We'll define moons in groups
        const moons = [];
        let angle = 0;
        const angleIncrement = (Math.PI * 2) / 95; // Distribute 95 moons evenly

        // 1. Inner Moons (Metis, Adrastea, Amalthea, Thebe) - Prograde
        const innerMoons = [
            { name: 'Metis', radius: 22, distance: 128000, speed: 1150 },
            { name: 'Adrastea', radius: 8.2, distance: 129000, speed: 1140 },
            { name: 'Amalthea', radius: 83.5, distance: 181400, speed: 860 },
            { name: 'Thebe', radius: 49.3, distance: 221900, speed: 760 }
        ];
        innerMoons.forEach(moon => {
            moons.push({
                name: moon.name,
                realRadius: moon.radius,
                realDistance: moon.distance,
                speed: moon.speed,
                color: '#B8860B', // Consistent color for this group
                angle: angle
            });
            angle += angleIncrement;
        });

        // 2. Galilean Moons (Io, Europa, Ganymede, Callisto) - Prograde
        const galileanMoons = [
            { name: 'Io', radius: 1821.6, distance: 421700, speed: 17.3, color: '#FFFF99' },
            { name: 'Europa', radius: 1560.8, distance: 671034, speed: 13.7, color: '#B0E0E6' },
            { name: 'Ganymede', radius: 2634.1, distance: 1070412, speed: 10.9, color: '#A0A0A0' },
            { name: 'Callisto', radius: 2410.3, distance: 1882709, speed: 8.2, color: '#808080' }
        ];
        galileanMoons.forEach(moon => {
            moons.push({
                name: moon.name,
                realRadius: moon.radius,
                realDistance: moon.distance,
                speed: moon.speed,
                color: moon.color,
                angle: angle
            });
            angle += angleIncrement;
        });

        // 3. Himalia Group (Prograde) - Largest group of irregular prograde moons
        const himaliaGroup = [
            { name: 'Himalia', radius: 67, distance: 11460000, speed: 1.0 },
            { name: 'Leda', radius: 10.8, distance: 11165000, speed: 1.1 },
            { name: 'Ersa', radius: 1.5, distance: 11484000, speed: 1.0 },
            { name: 'S/2018 J 2', radius: 1.5, distance: 11480000, speed: 1.0 },
            { name: 'Pandia', radius: 1.5, distance: 11481000, speed: 1.0 },
            { name: 'Lysithea', radius: 21.5, distance: 11717000, speed: 0.9 },
            { name: 'Elara', radius: 43, distance: 11741000, speed: 0.9 },
            { name: 'Dia', radius: 2.5, distance: 12267000, speed: 0.8 },
            { name: 'S/2018 J 4', radius: 1.5, distance: 16331000, speed: 0.6 }
        ];
        himaliaGroup.forEach(moon => {
            moons.push({
                name: moon.name,
                realRadius: moon.radius,
                realDistance: moon.distance * 0.8, // Scale for visibility
                speed: moon.speed,
                color: '#8FBC8F', // Dark Sea Green
                angle: angle
            });
            angle += angleIncrement;
        });

        // 4. Carpo/Valetudo (Isolated Prograde)
        moons.push({ name: 'Carpo', realRadius: 1.5, realDistance: 17050000, speed: 0.7, color: '#98FB98', angle: angle }); // Pale Green
        angle += angleIncrement;
        moons.push({ name: 'Valetudo', realRadius: 0.5, realDistance: 18700000, speed: 0.6, color: '#98FB98', angle: angle });
        angle += angleIncrement;

        // 5. Ananke Group (Retrograde) - Core members
        const anankeGroupCore = [
            { name: 'Ananke', radius: 14, distance: 21276000, speed: -0.5 },
            { name: 'Euporie', radius: 1, distance: 19302000, speed: -0.6 },
            { name: 'Eupheme', radius: 1, distance: 20465000, speed: -0.5 },
            { name: 'S/2021 J 3', radius: 1, distance: 20524000, speed: -0.5 },
            { name: 'S/2021 J 1', radius: 0.8, distance: 20567000, speed: -0.5 },
            { name: 'S/2010 J 2', radius: 0.5, distance: 20307000, speed: -0.5 },
            { name: 'S/2003 J 18', radius: 1.5, distance: 20339000, speed: -0.5 },
            { name: 'S/2021 J 5', radius: 1, distance: 21248000, speed: -0.5 },
            { name: 'S/2016 J 1', radius: 1, distance: 20605000, speed: -0.5 },
            { name: 'Mneme', radius: 1, distance: 21129000, speed: -0.5 },
            { name: 'Euanthe', radius: 1.5, distance: 20798000, speed: -0.5 },
            { name: 'S/2003 J 16', radius: 1, distance: 20739000, speed: -0.5 },
            { name: 'Harpalyke', radius: 2.2, distance: 21165000, speed: -0.5 },
            { name: 'Orthosie', radius: 1, distance: 20770000, speed: -0.5 },
            { name: 'Helike', radius: 2, distance: 21263000, speed: -0.5 },
            { name: 'Praxidike', radius: 3.5, distance: 20970000, speed: -0.5 },
            { name: 'S/2017 J 3', radius: 1, distance: 20790000, speed: -0.5 },
            { name: 'S/2017 J 7', radius: 1, distance: 20257000, speed: -0.5 },
            { name: 'S/2003 J 12', radius: 0.5, distance: 17824000, speed: -0.6 },
            { name: 'Thelxinoe', radius: 1, distance: 21162000, speed: -0.5 },
            { name: 'Thyone', radius: 2, distance: 20940000, speed: -0.5 },
            { name: 'S/2003 J 2', radius: 1, distance: 28507000, speed: -0.4 } // Distant outlier
        ];
        anankeGroupCore.forEach(moon => {
            moons.push({
                name: moon.name,
                realRadius: moon.radius,
                realDistance: moon.distance * 0.5, // Scale for visibility
                speed: moon.speed, // Negative for retrograde
                color: '#FF6347', // Tomato
                angle: angle
            });
            angle += angleIncrement;
        });

        // 6. Carme Group (Retrograde)
        const carmeGroup = [
            { name: 'Carme', radius: 23, distance: 23404000, speed: -0.4 },
            { name: 'Taygete', radius: 2.5, distance: 23360000, speed: -0.4 },
            { name: 'S/2017 J 9', radius: 1, distance: 21485000, speed: -0.5 },
            { name: 'S/2017 J 6', radius: 1, distance: 22725000, speed: -0.4 },
            { name: 'S/2011 J 1', radius: 0.5, distance: 20155000, speed: -0.6 },
            { name: 'S/2003 J 24', radius: 1.5, distance: 23065000, speed: -0.4 },
            { name: 'Erinome', radius: 1.6, distance: 23280000, speed: -0.4 },
            { name: 'Aitne', radius: 1.5, distance: 23231000, speed: -0.4 },
            { name: 'Eukelade', radius: 2, distance: 23320000, speed: -0.4 },
            { name: 'Kale', radius: 1, distance: 23217000, speed: -0.4 },
            { name: 'Isonoe', radius: 1.9, distance: 23155000, speed: -0.4 },
            { name: 'S/2003 J 9', radius: 0.5, distance: 23507000, speed: -0.4 },
            { name: 'S/2003 J 5', radius: 2, distance: 23570000, speed: -0.4 },
            { name: 'S/2017 J 2', radius: 1, distance: 23080000, speed: -0.4 },
            { name: 'S/2017 J 5', radius: 1, distance: 23270000, speed: -0.4 },
            { name: 'S/2017 J 8', radius: 0.5, distance: 23210000, speed: -0.4 },
            { name: 'Chaldene', radius: 1.9, distance: 23200000, speed: -0.4 },
            { name: 'S/2011 J 2', radius: 0.5, distance: 23450000, speed: -0.4 },
            { name: 'Herse', radius: 1, distance: 22970000, speed: -0.4 },
            { name: 'S/2003 J 10', radius: 1, distance: 23040000, speed: -0.4 },
            { name: 'S/2003 J 23', radius: 1, distance: 23975000, speed: -0.4 },
            { name: 'Arche', radius: 1.5, distance: 22931000, speed: -0.4 },
            { name: 'S/2016 J 3', radius: 1, distance: 22830000, speed: -0.4 }
        ];
        carmeGroup.forEach(moon => {
            moons.push({
                name: moon.name,
                realRadius: moon.radius,
                realDistance: moon.distance * 0.5, // Scale for visibility
                speed: moon.speed, // Negative for retrograde
                color: '#9370DB', // Medium Purple
                angle: angle
            });
            angle += angleIncrement;
        });

        // 7. Pasiphae Group (Retrograde)
        const pasiphaeGroup = [
            { name: 'Pasiphae', radius: 30, distance: 23624000, speed: -0.4 },
            { name: 'S/2017 J 1', radius: 1, distance: 23450000, speed: -0.4 },
            { name: 'S/2003 J 4', radius: 1, distance: 23963000, speed: -0.4 },
            { name: 'S/2016 J 4', radius: 0.8, distance: 23695000, speed: -0.4 },
            { name: 'S/2018 J 1', radius: 1.5, distance: 23721000, speed: -0.4 },
            { name: 'Sinope', radius: 19, distance: 23939000, speed: -0.4 },
            { name: 'Sponde', radius: 1, distance: 23810000, speed: -0.4 },
            { name: 'Autonoe', radius: 2, distance: 23804000, speed: -0.4 },
            { name: 'Megaclite', radius: 2.7, distance: 23806000, speed: -0.4 },
            { name: 'S/2003 J 19', radius: 1, distance: 23708000, speed: -0.4 },
            { name: 'S/2010 J 1', radius: 1, distance: 23314000, speed: -0.4 },
            { name: 'Callirrhoe', radius: 4.3, distance: 24102000, speed: -0.4 },
            { name: 'S/2011 J 1', radius: 0.5, distance: 20155000, speed: -0.6 }, // Sometimes listed here
            { name: 'Cyllene', radius: 1, distance: 24350000, speed: -0.4 },
            { name: 'Aoede', radius: 2, distance: 23981000, speed: -0.4 },
            { name: 'S/2003 J 15', radius: 1, distance: 22100000, speed: -0.5 },
            { name: 'S/2003 J 17', radius: 1, distance: 22610000, speed: -0.4 },
            { name: 'Kore', radius: 1, distance: 24930000, speed: -0.3 },
            { name: 'S/2003 J 14', radius: 1, distance: 23900000, speed: -0.4 },
            { name: 'S/2018 J 3', radius: 0.8, distance: 22530000, speed: -0.5 },
            { name: 'S/2021 J 2', radius: 0.8, distance: 20587000, speed: -0.5 },
            { name: 'S/2021 J 4', radius: 0.8, distance: 23073000, speed: -0.4 },
            { name: 'S/2022 J 1', radius: 0.8, distance: 22000000, speed: -0.5 },
            { name: 'S/2022 J 2', radius: 0.8, distance: 19500000, speed: -0.6 },
            { name: 'S/2022 J 3', radius: 0.8, distance: 21000000, speed: -0.5 }
        ];
        pasiphaeGroup.forEach(moon => {
            moons.push({
                name: moon.name,
                realRadius: moon.radius,
                realDistance: moon.distance * 0.5, // Scale for visibility
                speed: moon.speed, // Negative for retrograde
                color: '#DA70D6', // Orchid
                angle: angle
            });
            angle += angleIncrement;
        });

        // Final check to ensure we have exactly 95 moons
        // console.log("Total Jupiter moons generated: " + moons.length);
        return moons;
    })(), // Immediately invoke the function to populate the array
    path: {
                a: 778500000,
                e: 0.0489,
                i: 1.30,
                omega: 100.464,
                w: 273.867
            },
    info: {
        type: 'Gas Giant',
        diameter: '142,984 km',
        mass: '1.90 × 10²⁷ kg',
        day: '9.9 hours',
        year: '11.9 Earth years',
        moons: '95+ known'
    }
},
{
                        name: 'Saturn',
                        realRadius: 58232,
                        realDistance: 1432000000,
                        speed: 0.03,
                        angle: 0,
                        color: '#FAD5A5',
                        hasRings: true,
                        eccentricity: 0.057,
                        type: 'gas-giant',
                        // Saturn moons array - following Jupiter's pattern
// Saturn has 274 confirmed moons as of 2025, but we'll focus on major ones and representatives
moons: (function() {
    const moons = [];
    let angle = 0;
    const angleIncrement = (Math.PI * 2) / 83; // Distribute across 83 representative moons

    // 1. Inner Small Moons (Ring shepherds and co-orbitals)
    const innerMoons = [
        { name: 'S/2009 S 1', radius: 0.15, distance: 117000, speed: 2200, color: '#888888' }, // Ring moonlet
        { name: 'Pan', radius: 14, distance: 133584, speed: 1950, color: '#D2B48C' }, // Ring shepherd
        { name: 'Daphnis', radius: 3.8, distance: 136505, speed: 1890, color: '#CD853F' }, // Ring shepherd  
        { name: 'Atlas', radius: 15, distance: 137670, speed: 1850, color: '#DEB887' }, // Ring shepherd
        { name: 'Prometheus', radius: 43, distance: 139380, speed: 1800, color: '#DAA520' }, // Ring shepherd
        { name: 'Pandora', radius: 40.7, distance: 141720, speed: 1750, color: '#B8860B' }, // Ring shepherd
        { name: 'Epimetheus', radius: 58.1, distance: 151422, speed: 1640, color: '#CD853F' }, // Co-orbital with Janus
        { name: 'Janus', radius: 89.5, distance: 151472, speed: 1640, color: '#D2B48C' }, // Co-orbital with Epimetheus
        { name: 'Aegaeon', radius: 0.33, distance: 167500, speed: 1450, color: '#696969' }, // Arc moonlet
        { name: 'Mimas', radius: 198.2, distance: 185539, speed: 1270, color: '#C0C0C0' }, // Major inner moon
        { name: 'Methone', radius: 1.45, distance: 194440, speed: 1200, color: '#778899' }, // Alkyonides group
        { name: 'Anthe', radius: 0.9, distance: 197665, speed: 1180, color: '#778899' }, // Alkyonides group
        { name: 'Pallene', radius: 2.2, distance: 212280, speed: 1110, color: '#778899' } // Alkyonides group
    ];
    innerMoons.forEach(moon => {
        moons.push({
            name: moon.name,
            realRadius: moon.radius,
            realDistance: moon.distance,
            speed: moon.speed,
            color: moon.color,
            angle: angle
        });
        angle += angleIncrement;
    });

    // 2. Major Regular Moons (Classical satellites)
    const majorMoons = [
        { name: 'Enceladus', radius: 252.1, distance: 238020, speed: 1050, color: '#F0F8FF' }, // Ice geysers
        { name: 'Tethys', radius: 531.1, distance: 294672, speed: 890, color: '#E6E6FA' }, // Classical moon
        { name: 'Calypso', radius: 10.7, distance: 294672, speed: 890, color: '#9370DB' }, // Tethys Trojan L5
        { name: 'Telesto', radius: 12.4, distance: 294672, speed: 890, color: '#8A2BE2' }, // Tethys Trojan L4
        { name: 'Dione', radius: 561.4, distance: 377415, speed: 730, color: '#D8BFD8' }, // Classical moon
        { name: 'Helene', radius: 17.6, distance: 377415, speed: 730, color: '#9932CC' }, // Dione Trojan L4
        { name: 'Polydeuces', radius: 0.7, distance: 377415, speed: 730, color: '#8B008B' }, // Dione Trojan L5
        { name: 'Rhea', radius: 763.8, distance: 527108, speed: 550, color: '#C8C8C8' }, // Classical moon
        { name: 'Titan', radius: 2574, distance: 1221830, speed: 220, color: '#FFA500' }, // Largest moon
        { name: 'Iapetus', radius: 734.5, distance: 3561300, speed: 79, color: '#2F4F4F' } // Two-tone coloration
    ];
    majorMoons.forEach(moon => {
        moons.push({
            name: moon.name,
            realRadius: moon.radius,
            realDistance: moon.distance,
            speed: moon.speed,
            color: moon.color,
            angle: angle
        });
        angle += angleIncrement;
    });

    // 3. Inuit Group (Prograde irregulars)
    const inuitGroup = [
        { name: 'Kiviuq', radius: 8, distance: 11365000, speed: 1.1, color: '#4682B4' },
        { name: 'Ijiraq', radius: 6, distance: 11440000, speed: 1.1, color: '#4682B4' },
        { name: 'Paaliaq', radius: 11, distance: 15200000, speed: 0.9, color: '#5F9EA0' },
        { name: 'Siarnaq', radius: 20, distance: 18015000, speed: 0.8, color: '#6495ED' },
        { name: 'Tarqeq', radius: 3.5, distance: 18009000, speed: 0.8, color: '#4682B4' }
    ];
    inuitGroup.forEach(moon => {
        moons.push({
            name: moon.name,
            realRadius: moon.radius,
            realDistance: moon.distance * 0.6, // Scale for visibility
            speed: moon.speed,
            color: moon.color,
            angle: angle
        });
        angle += angleIncrement;
    });

    // 4. Gallic Group (Prograde irregulars) 
    const gallicGroup = [
        { name: 'Albiorix', radius: 16, distance: 16404000, speed: 0.9, color: '#228B22' },
        { name: 'Bebhionn', radius: 3, distance: 17119000, speed: 0.8, color: '#32CD32' },
        { name: 'Erriapus', radius: 5, distance: 17343000, speed: 0.8, color: '#90EE90' },
        { name: 'Tarvos', radius: 7.5, distance: 17983000, speed: 0.8, color: '#9ACD32' }
    ];
    gallicGroup.forEach(moon => {
        moons.push({
            name: moon.name,
            realRadius: moon.radius,
            realDistance: moon.distance * 0.6, // Scale for visibility
            speed: moon.speed,
            color: moon.color,
            angle: angle
        });
        angle += angleIncrement;
    });

    // 5. Norse Group (Retrograde irregulars) - Largest group
    const norseGroup = [
        { name: 'Phoebe', radius: 106.5, distance: 12947000, speed: -0.9, color: '#8B0000' }, // Largest retrograde
        { name: 'Skathi', radius: 4, distance: 15541000, speed: -0.9, color: '#A52A2A' },
        { name: 'Ymir', radius: 9, distance: 23040000, speed: -0.6, color: '#B22222' },
        { name: 'Mundilfari', radius: 3.5, distance: 18628000, speed: -0.8, color: '#CD5C5C' },
        { name: 'Suttungr', radius: 3.5, distance: 19459000, speed: -0.8, color: '#DC143C' },
        { name: 'Thrymr', radius: 3.5, distance: 20314000, speed: -0.7, color: '#FF6347' },
        { name: 'Narvi', radius: 3.5, distance: 19007000, speed: -0.8, color: '#FF4500' },
        { name: 'Bestla', radius: 3.5, distance: 20192000, speed: -0.7, color: '#FF7F50' },
        { name: 'Farbauti', radius: 2.5, distance: 20390000, speed: -0.7, color: '#FFA07A' },
        { name: 'Hyrrokkin', radius: 4, distance: 18437000, speed: -0.8, color: '#FA8072' },
        { name: 'Kari', radius: 3.5, distance: 22089000, speed: -0.7, color: '#E9967A' },
        { name: 'Fenrir', radius: 2, distance: 22454000, speed: -0.7, color: '#F4A460' },
        { name: 'Surtur', radius: 3, distance: 22707000, speed: -0.7, color: '#D2691E' },
        { name: 'Loge', radius: 3, distance: 23058000, speed: -0.6, color: '#CD853F' },
        { name: 'Fornjot', radius: 3, distance: 25146000, speed: -0.6, color: '#A0522D' },
        { name: 'Aegir', radius: 3, distance: 20735000, speed: -0.7, color: '#8B4513' },
        { name: 'Bergelmir', radius: 3, distance: 19336000, speed: -0.8, color: '#D2B48C' },
        { name: 'Hati', radius: 3, distance: 19856000, speed: -0.8, color: '#DEB887' },
        { name: 'Jarnsaxa', radius: 3, distance: 18811000, speed: -0.8, color: '#F5DEB3' },
        { name: 'Greip', radius: 3, distance: 18206000, speed: -0.8, color: '#FFEFD5' }
    ];
    norseGroup.forEach(moon => {
        moons.push({
            name: moon.name,
            realRadius: moon.radius,
            realDistance: moon.distance * 0.5, // Scale for visibility
            speed: moon.speed, // Negative for retrograde
            color: moon.color,
            angle: angle
        });
        angle += angleIncrement;
    });

    // 6. Additional Recent Discoveries (Mixed groups)
    const recentMoons = [
        // More Norse group members
        { name: 'Skoll', radius: 3, distance: 17665000, speed: -0.8, color: '#FFE4E1' },
        { name: 'Angrboda', radius: 3, distance: 19300000, speed: -0.8, color: '#MISTYROSE' },
        { name: 'Eggther', radius: 3, distance: 20735000, speed: -0.7, color: '#FFDAB9' },
        { name: 'Beli', radius: 3, distance: 19336000, speed: -0.8, color: '#PEACHPUFF' },
        { name: 'Gunnlod', radius: 2.5, distance: 18685000, speed: -0.8, color: '#NAVAJOWHITE' },
        { name: 'Thiazzi', radius: 3, distance: 19800000, speed: -0.8, color: '#MOCCASIN' },
        { name: 'Alvaldi', radius: 3, distance: 18500000, speed: -0.8, color: '#WHEAT' },
        { name: 'Gerd', radius: 3, distance: 18200000, speed: -0.8, color: '#BURLYWOOD' },
        
        // Some of the newest discoveries (S/2004, S/2006, S/2007 series)
        { name: 'S/2004 S 7', radius: 3, distance: 20999000, speed: -0.7, color: '#BC8F8F' },
        { name: 'S/2004 S 12', radius: 2.5, distance: 19905000, speed: -0.8, color: '#F5F5DC' },
        { name: 'S/2004 S 13', radius: 3, distance: 18450000, speed: -0.8, color: '#FFE4B5' },
        { name: 'S/2004 S 17', radius: 2, distance: 18600000, speed: -0.8, color: '#DDBEA9' },
        { name: 'S/2006 S 1', radius: 3, distance: 18981000, speed: -0.8, color: '#D2B48C' },
        { name: 'S/2006 S 3', radius: 3, distance: 22096000, speed: -0.7, color: '#F4A460' },
        { name: 'S/2007 S 2', radius: 3, distance: 16725000, speed: -0.9, color: '#DAA520' },
        { name: 'S/2007 S 3', radius: 2.5, distance: 20518000, speed: -0.7, color: '#B8860B' },
        
        // Sample of very recent 2019-2021 discoveries
        { name: 'S/2019 S 1', radius: 2.5, distance: 11400000, speed: 1.1, color: '#556B2F' }, // Inuit-like
        { name: 'S/2019 S 6', radius: 2, distance: 18932000, speed: -0.8, color: '#8FBC8F' }, // Norse
        { name: 'S/2019 S 15', radius: 2.5, distance: 25108000, speed: -0.6, color: '#9ACD32' }, // Distant Norse
        { name: 'S/2020 S 1', radius: 2.5, distance: 17500000, speed: -0.8, color: '#ADFF2F' }, // Norse
        { name: 'S/2020 S 5', radius: 1.5, distance: 11380000, speed: 1.1, color: '#98FB98' } // Inuit-like
    ];
    recentMoons.forEach(moon => {
        moons.push({
            name: moon.name,
            realRadius: moon.radius,
            realDistance: moon.distance * 0.5, // Scale for visibility
            speed: moon.speed,
            color: moon.color,
            angle: angle
        });
        angle += angleIncrement;
    });

    // console.log("Total Saturn moons generated: " + moons.length);
    return moons;
})(), // Immediately invoke the function to populate the array
path: {
                a: 1434000000,
                e: 0.0565,
                i: 2.49,
                omega: 113.665,
                w: 339.392
            },
                        info: {
                            type: 'Gas Giant',
                            diameter: '120,536 km',
                            mass: '5.68 × 10²⁶ kg',
                            day: '10.7 hours',
                            year: '29.4 Earth years',
                            moons: '146+ known'
                        }
                    },
                    {
                        name: 'Uranus',
                        realRadius: 25362,
                        angle: 0,
                        realDistance: 2867000000,
                        speed: 0.01,
                        color: '#4FD0E4',
                        angle: Math.PI * 0.1,
                        eccentricity: 0.046,
                        type: 'ice-giant',
                        axialTilt: 98, // Nearly sideways!
                        path: {
                a: 2871000000,
                e: 0.0457,
                i: 0.77,
                omega: 74.006,
                w: 96.998857
            },
                        moons: [
                            {
            name: 'Cordelia',
            realRadius: 20,
            realDistance: 49770,
            speed: 1120,
            color: '#A0A0A0',
            angle: 0
        },
        {
            name: 'Ophelia',
            realRadius: 21,
            realDistance: 53790,
            speed: 1050,
            color: '#A0A0A0',
            angle: Math.PI * 0.2
        },
        {
            name: 'Bianca',
            realRadius: 25,
            realDistance: 59170,
            speed: 970,
            color: '#A0A0A0',
            angle: Math.PI * 0.4
        },
        {
            name: 'Cressida',
            realRadius: 39,
            realDistance: 61770,
            speed: 930,
            color: '#A0A0A0',
            angle: Math.PI * 0.6
        },
        {
            name: 'Desdemona',
            realRadius: 32,
            realDistance: 62680,
            speed: 920,
            color: '#A0A0A0',
            angle: Math.PI * 0.8
        },
        {
            name: 'Juliet',
            realRadius: 46,
            realDistance: 64350,
            speed: 900,
            color: '#A0A0A0',
            angle: Math.PI
        },
        {
            name: 'Portia',
            realRadius: 67,
            realDistance: 66090,
            speed: 880,
            color: '#C8C8C8',
            angle: Math.PI * 1.2
        },
        {
            name: 'Rosalind',
            realRadius: 36,
            realDistance: 69940,
            speed: 835,
            color: '#A0A0A0',
            angle: Math.PI * 1.4
        },
        {
            name: 'Cupid',
            realRadius: 9,
            realDistance: 74390,
            speed: 780,
            color: '#888888',
            angle: Math.PI * 1.6
        },
        {
            name: 'Belinda',
            realRadius: 40,
            realDistance: 75260,
            speed: 770,
            color: '#A0A0A0',
            angle: Math.PI * 1.8
        },
        {
            name: 'Perdita',
            realRadius: 15,
            realDistance: 76420,
            speed: 760,
            color: '#888888',
            angle: Math.PI * 0.1
        },
        {
            name: 'Puck',
            realRadius: 81,
            realDistance: 86010,
            speed: 700,
            color: '#C8C8C8',
            angle: Math.PI * 0.3
        },
        {
            name: 'Mab',
            realRadius: 12,
            realDistance: 97740,
            speed: 630,
            color: '#888888',
            angle: Math.PI * 0.5
        },
        {
            name: 'Miranda',
            realRadius: 235.8,
            realDistance: 129390,
            speed: 20.8,
            color: '#BC8F8F',
            angle: Math.PI * 1.6
        },
        {
            name: 'Ariel',
            realRadius: 578.9,
            realDistance: 191020,
            speed: 12.5,
            color: '#D3D3D3',
            angle: Math.PI * 0.7
        },
        {
            name: 'Umbriel',
            realRadius: 584.7,
            realDistance: 266300,
            speed: 8.4,
            color: '#696969',
            angle: Math.PI * 1.9
        },
        {
            name: 'Titania',
            realRadius: 788.4,
            realDistance: 436300,
            speed: 4.7,
            color: '#C0C0C0',
            angle: 0
        },
        {
            name: 'Oberon',
            realRadius: 761.4,
            realDistance: 583500,
            speed: 3.5,
            color: '#A9A9A9',
            angle: Math.PI * 0.5
        },
        {
            name: 'Francisco',
            realRadius: 11,
            realDistance: 4276000,
            speed: -1.4, // retrograde
            color: '#555555',
            angle: Math.PI * 0.25
        },
        {
            name: 'Caliban',
            realRadius: 21,
            realDistance: 7230000,
            speed: -1.1, // retrograde
            color: '#555555',
            angle: Math.PI * 0.75
        },
        {
            name: 'Stephano',
            realRadius: 16,
            realDistance: 8007000,
            speed: -1.1, // retrograde
            color: '#555555',
            angle: Math.PI * 1.25
        },
        {
            name: 'Trinculo',
            realRadius: 9,
            realDistance: 8504000,
            speed: -1.0, // retrograde
            color: '#555555',
            angle: Math.PI * 1.75
        },
        {
            name: 'Sycorax',
            realRadius: 75,
            realDistance: 12179000,
            speed: -0.8, // retrograde
            color: '#777777',
            angle: Math.PI * 0.15
        },
        {
            name: 'Margaret',
            realRadius: 10,
            realDistance: 14345000,
            speed: 0.9,
            color: '#555555',
            angle: Math.PI * 0.65
        },
        {
            name: 'Prospero',
            realRadius: 25,
            realDistance: 16256000,
            speed: -0.7, // retrograde
            color: '#555555',
            angle: Math.PI * 1.15
        },
        {
            name: 'Setebos',
            realRadius: 24,
            realDistance: 17418000,
            speed: -0.6, // retrograde
            color: '#555555',
            angle: Math.PI * 1.65
        },
        {
            name: 'Ferdinand',
            realRadius: 10,
            realDistance: 20900000,
            speed: -0.5, // retrograde
            color: '#555555',
            angle: Math.PI * 0.35
        }
                        ],
                        info: {
                            type: 'Ice Giant',
                            diameter: '51,118 km',
                            mass: '8.68 × 10²⁵ kg',
                            day: '17.2 hours',
                            year: '84 Earth years',
                            axialTilt: '98°'
                        }
                    },
                    {
                        name: 'Neptune',
                        realRadius: 24622,
                        realDistance: 4515000000,
                        speed: 0.006,
                        angle: 0,
                        color: '#4B70DD',
                        angle: Math.PI * 0.8,
                        eccentricity: 0.009,
                        type: 'ice-giant',
                        path: {
                a: 4495000000,
                e: 0.0113,
                i: 1.77,
                omega: 131.784,
                w: 276.336
            },
                        moons: [
                            {
            name: 'Naiad',
            realRadius: 33,
            realDistance: 48227,
            speed: 1257,
            color: '#A0A0A0',
            angle: 0
        },
        {
            name: 'Thalassa',
            realRadius: 41,
            realDistance: 50075,
            speed: 1215,
            color: '#A0A0A0',
            angle: Math.PI * 0.25
        },
        {
            name: 'Despina',
            realRadius: 75,
            realDistance: 52526,
            speed: 1165,
            color: '#C8C8C8',
            angle: Math.PI * 0.5
        },
        {
            name: 'Galatea',
            realRadius: 88,
            realDistance: 61953,
            speed: 1055,
            color: '#C8C8C8',
            angle: Math.PI * 0.75
        },
        {
            name: 'Larissa',
            realRadius: 97,
            realDistance: 73548,
            speed: 930,
            color: '#C8C8C8',
            angle: Math.PI
        },
        {
            name: 'Hippocamp',
            realRadius: 17,
            realDistance: 105283,
            speed: 770,
            color: '#888888',
            angle: Math.PI * 1.25
        },
        {
            name: 'Proteus',
            realRadius: 210,
            realDistance: 117647,
            speed: 690,
            color: '#A9A9A9',
            angle: Math.PI * 1.5
        },
        {
            name: 'Triton',
            realRadius: 1353.4,
            realDistance: 354759,
            speed: -15.9, // retrograde
            color: '#F5F5DC',
            angle: 0
        },
        {
            name: 'Nereid',
            realRadius: 170,
            realDistance: 5513400,
            speed: 0.94,
            color: '#A9A9A9',
            angle: Math.PI * 0.3
        },
        {
            name: 'Halimede',
            realRadius: 31,
            realDistance: 15728000,
            speed: -0.57, // retrograde
            color: '#777777',
            angle: Math.PI * 0.6
        },
        {
            name: 'Sao',
            realRadius: 22,
            realDistance: 22422000,
            speed: 0.47,
            color: '#777777',
            angle: Math.PI * 0.9
        },
        {
            name: 'Laomedeia',
            realRadius: 21,
            realDistance: 23571000,
            speed: 0.45,
            color: '#777777',
            angle: Math.PI * 1.2
        },
        {
            name: 'Psamathe',
            realRadius: 20,
            realDistance: 46695000,
            speed: -0.24, // retrograde
            color: '#777777',
            angle: Math.PI * 1.5
        },
        {
            name: 'Neso',
            realRadius: 30,
            realDistance: 48387000,
            speed: -0.23, // retrograde
            color: '#777777',
            angle: Math.PI * 1.8
        }
                        ],
                        info: {
                            type: 'Ice Giant',
                            diameter: '49,528 km',
                            mass: '1.02 × 10²⁶ kg',
                            day: '16.1 hours',
                            year: '165 Earth years',
                            windSpeed: '2,100 km/h'
                        }
                    }
                ];
            }