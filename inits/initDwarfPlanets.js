export function initDwarfPlanets(system) {
    system.dwarfPlanets = [
        // 🌌 Official IAU Dwarf Planets (5 recognized)
        {
            name: 'Pluto',
            realRadius: 1188.3,
            realDistance: 5906440000,
            speed: 0.004,
            color: '#DEB887',
            angle: Math.PI * 0.15,
            eccentricity: 0.249,
            inclination: 17.16,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 5906440000, // semi-major axis
                e: 0.249, // eccentricity
                i: 17.16, // inclination
                omega: 113.76, // longitude of ascending node
                w: 113.76 // argument of periapsis
            },
            moons: [
                {
                    name: 'Charon',
                    realRadius: 606,
                    realDistance: 19591,
                    speed: 15.3,
                    color: '#A9A9A9',
                    angle: 0
                },
                {
                    name: 'Nix',
                    realRadius: 23,
                    realDistance: 48675,
                    speed: 6.2,
                    color: '#D3D3D3',
                    angle: Math.PI * 0.3
                },
                {
                    name: 'Hydra',
                    realRadius: 30.5,
                    realDistance: 64780,
                    speed: 4.8,
                    color: '#DCDCDC',
                    angle: Math.PI * 0.6
                },
                {
                    name: 'Styx',
                    realRadius: 8.5,
                    realDistance: 42656,
                    speed: 7.9,
                    color: '#C0C0C0',
                    angle: Math.PI * 0.9
                },
                {
                    name: 'Kerberos',
                    realRadius: 12,
                    realDistance: 57783,
                    speed: 5.4,
                    color: '#B8B8B8',
                    angle: Math.PI * 1.2
                }
            ],
            info: {
                type: 'Dwarf Planet (IAU Official)',
                diameter: '2,376 km',
                day: '6.4 Earth days',
                year: '248 Earth years',
                discoveredBy: 'Clyde Tombaugh (1930)',
                composition: 'Rock and ice',
                atmosphere: 'Thin nitrogen atmosphere'
            }
        },
        {
            name: 'Eris',
            realRadius: 1163,
            realDistance: 10120000000,
            speed: 0.002,
            color: '#F5F5DC',
            angle: Math.PI * 0.8,
            eccentricity: 0.441,
            inclination: 44.04,
            type: 'dwarf-planet',
            region: 'Scattered Disk',
            path: {
                a: 10120000000,
                e: 0.441,
                i: 44.04,
                omega: 35.87,
                w: 151.31
            },
            moons: [
                {
                    name: 'Dysnomia',
                    realRadius: 175,
                    realDistance: 37273,
                    speed: 6.7,
                    color: '#C0C0C0',
                    angle: 0
                }
            ],
            info: {
                type: 'Dwarf Planet (IAU Official)',
                diameter: '2,326 km',
                day: '25.9 hours',
                year: '558 Earth years',
                discoveredBy: 'Mike Brown, Chad Trujillo, David Rabinowitz (2005)',
                note: 'Most massive known dwarf planet'
            }
        },
        {
            name: 'Makemake',
            realRadius: 715,
            realDistance: 6850000000,
            speed: 0.003,
            color: '#8B4513',
            angle: Math.PI * 1.2,
            eccentricity: 0.159,
            inclination: 28.96,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 6850000000,
                e: 0.159,
                i: 28.96,
                omega: 79.38,
                w: 298.41
            },
            moons: [
                {
                    name: 'S/2015 (136472) 1',
                    realRadius: 87.5,
                    realDistance: 21000,
                    speed: 12.4,
                    color: '#696969',
                    angle: 0
                }
            ],
            info: {
                type: 'Dwarf Planet (IAU Official)',
                diameter: '1,430 km',
                day: '22.5 hours',
                year: '310 Earth years',
                discoveredBy: 'Mike Brown, Chad Trujillo, David Rabinowitz (2005)',
                composition: 'Rock and ice, methane surface'
            }
        },
        {
            name: 'Haumea',
            realRadius: 816, // equivalent sphere radius
            realDistance: 6484000000,
            speed: 0.0035,
            color: '#DAA520',
            angle: Math.PI * 0.4,
            eccentricity: 0.189,
            inclination: 28.19,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 6484000000,
                e: 0.189,
                i: 28.19,
                omega: 122.11,
                w: 238.72
            },
            moons: [
                {
                    name: 'Hi\'iaka',
                    realRadius: 195,
                    realDistance: 49880,
                    speed: 4.9,
                    color: '#B0B0B0',
                    angle: 0
                },
                {
                    name: 'Namaka',
                    realRadius: 85,
                    realDistance: 25657,
                    speed: 8.9,
                    color: '#A8A8A8',
                    angle: Math.PI * 0.5
                }
            ],
            info: {
                type: 'Dwarf Planet (IAU Official)',
                diameter: '1,632 × 1,075 km (elongated)',
                day: '3.9 hours (fastest spinning large object)',
                year: '284 Earth years',
                discoveredBy: 'Mike Brown, Chad Trujillo, David Rabinowitz (2004)',
                unique: 'Elongated shape, has ring system'
            }
        },
        {
            name: 'Ceres',
            realRadius: 473,
            realDistance: 413700000,
            speed: 0.017,
            color: '#8C7853',
            angle: Math.PI * 1.7,
            eccentricity: 0.076,
            inclination: 10.59,
            type: 'dwarf-planet',
            region: 'Asteroid Belt',
            path: {
                a: 413700000,
                e: 0.076,
                i: 10.59,
                omega: 80.39,
                w: 73.6
            },
            info: {
                type: 'Dwarf Planet (IAU Official)',
                diameter: '946 km',
                day: '9.1 hours',
                year: '4.6 Earth years',
                discoveredBy: 'Giuseppe Piazzi (1801)',
                unique: 'Only dwarf planet in inner solar system',
                visited: 'Dawn spacecraft (2015-2018)'
            }
        },

        // 🌟 Highly Likely Dwarf Planets (Large TNOs)
        {
            name: 'Sedna',
            realRadius: 497.5,
            realDistance: 11400000000,
            speed: 0.0015,
            color: '#8B0000',
            angle: Math.PI * 0.6,
            eccentricity: 0.841,
            inclination: 11.93,
            type: 'dwarf-planet',
            region: 'Detached Object',
            path: {
                a: 78400000000, // extremely elliptical
                e: 0.841,
                i: 11.93,
                omega: 144.5,
                w: 311.1
            },
            info: {
                type: 'Highly Likely Dwarf Planet',
                diameter: '995 km',
                year: '11,400 Earth years',
                discoveredBy: 'Mike Brown, Chad Trujillo, David Rabinowitz (2003)',
                unique: 'Most distant known solar system object',
                note: 'Extremely red surface color'
            }
        },
        {
            name: 'Gonggong',
            realRadius: 615,
            realDistance: 10100000000,
            speed: 0.002,
            color: '#DC143C',
            angle: Math.PI * 1.4,
            eccentricity: 0.499,
            inclination: 30.74,
            type: 'dwarf-planet',
            region: 'Scattered Disk',
            path: {
                a: 10100000000,
                e: 0.499,
                i: 30.74,
                omega: 336.75,
                w: 67.6
            },
            moons: [
                {
                    name: 'Xiangliu',
                    realRadius: 50,
                    realDistance: 25000,
                    speed: 8.3,
                    color: '#8B0000',
                    angle: 0
                }
            ],
            info: {
                type: 'Highly Likely Dwarf Planet',
                diameter: '1,230 km',
                day: '22.4 hours',
                year: '554 Earth years',
                discoveredBy: 'Palomar Observatory (2007)',
                note: 'Very red color, likely has methanol'
            }
        },
        {
            name: 'Quaoar',
            realRadius: 555,
            realDistance: 6530000000,
            speed: 0.003,
            color: '#A0522D',
            angle: Math.PI * 0.3,
            eccentricity: 0.039,
            inclination: 8.0,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 6530000000,
                e: 0.039,
                i: 8.0,
                omega: 189.0,
                w: 155.7
            },
            moons: [
                {
                    name: 'Weywot',
                    realRadius: 41,
                    realDistance: 14500,
                    speed: 12.4,
                    color: '#8B4513',
                    angle: 0
                }
            ],
            info: {
                type: 'Highly Likely Dwarf Planet',
                diameter: '1,110 km',
                day: '17.7 hours',
                year: '288 Earth years',
                discoveredBy: 'Chad Trujillo, Mike Brown (2002)',
                unique: 'Has ring system discovered in 2023'
            }
        },
        {
            name: 'Orcus',
            realRadius: 458.5,
            realDistance: 5900000000,
            speed: 0.004,
            color: '#2F4F4F',
            angle: Math.PI * 1.6,
            eccentricity: 0.226,
            inclination: 20.57,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 5900000000,
                e: 0.226,
                i: 20.57,
                omega: 268.6,
                w: 73.7
            },
            moons: [
                {
                    name: 'Vanth',
                    realRadius: 221,
                    realDistance: 9030,
                    speed: 22.5,
                    color: '#696969',
                    angle: 0
                }
            ],
            info: {
                type: 'Highly Likely Dwarf Planet',
                diameter: '917 km',
                year: '248 Earth years',
                discoveredBy: 'Mike Brown, Chad Trujillo, David Rabinowitz (2004)',
                note: 'Often called "anti-Pluto" - opposite orbital phase'
            }
        },
        {
            name: 'Salacia',
            realRadius: 423,
            realDistance: 6200000000,
            speed: 0.0037,
            color: '#4682B4',
            angle: Math.PI * 0.9,
            eccentricity: 0.111,
            inclination: 23.9,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 6200000000,
                e: 0.111,
                i: 23.9,
                omega: 280.1,
                w: 310.9
            },
            moons: [
                {
                    name: 'Actaea',
                    realRadius: 145,
                    realDistance: 5619,
                    speed: 33.8,
                    color: '#708090',
                    angle: 0
                }
            ],
            info: {
                type: 'Likely Dwarf Planet',
                diameter: '846 km',
                year: '273 Earth years',
                discoveredBy: 'Henry Roe, Mike Brown, Kristina Barkume (2004)',
                composition: 'Low density, likely icy'
            }
        },

        // 🪨 Possible Dwarf Planets (Borderline cases)
        {
            name: 'Varda',
            realRadius: 348,
            realDistance: 6200000000,
            speed: 0.0037,
            color: '#8FBC8F',
            angle: Math.PI * 1.8,
            eccentricity: 0.139,
            inclination: 21.5,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 6200000000,
                e: 0.139,
                i: 21.5,
                omega: 195.8,
                w: 183.9
            },
            moons: [
                {
                    name: 'Ilmarë',
                    realRadius: 163,
                    realDistance: 4865,
                    speed: 35.2,
                    color: '#9ACD32',
                    angle: 0
                }
            ],
            info: {
                type: 'Possible Dwarf Planet',
                diameter: '696 km',
                year: '274 Earth years',
                discoveredBy: 'Jeffrey Larsen (2003)',
                note: 'Binary system with large moon'
            }
        },
        {
            name: 'Ixion',
            realRadius: 317.5,
            realDistance: 5900000000,
            speed: 0.004,
            color: '#CD853F',
            angle: Math.PI * 0.7,
            eccentricity: 0.242,
            inclination: 19.6,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 5900000000,
                e: 0.242,
                i: 19.6,
                omega: 71.0,
                w: 299.0
            },
            info: {
                type: 'Possible Dwarf Planet',
                diameter: '650 km',
                day: '12.4 hours',
                year: '248 Earth years',
                discoveredBy: 'Deep Ecliptic Survey (2001)',
                composition: 'Dark, carbon-rich surface'
            }
        },
        {
            name: 'Varuna',
            realRadius: 334,
            realDistance: 6440000000,
            speed: 0.0035,
            color: '#B22222',
            angle: Math.PI * 1.3,
            eccentricity: 0.050,
            inclination: 17.2,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 6440000000,
                e: 0.050,
                i: 17.2,
                omega: 97.5,
                w: 274.8
            },
            info: {
                type: 'Possible Dwarf Planet',
                diameter: '668 km',
                day: '6.34 hours',
                year: '283 Earth years',
                discoveredBy: 'Robert McMillan (2000)',
                unique: 'Highly elongated, fast rotator'
            }
        },
        {
            name: 'Chaos',
            realRadius: 300,
            realDistance: 6200000000,
            speed: 0.0037,
            color: '#483D8B',
            angle: Math.PI * 0.5,
            eccentricity: 0.109,
            inclination: 12.0,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 6200000000,
                e: 0.109,
                i: 12.0,
                omega: 50.3,
                w: 55.4
            },
            info: {
                type: 'Possible Dwarf Planet',
                diameter: '600 km',
                year: '273 Earth years',
                discoveredBy: 'Deep Ecliptic Survey (1998)',
                note: 'Member of Haumea family'
            }
        },
        {
            name: '2002 MS4',
            realRadius: 410,
            realDistance: 6100000000,
            speed: 0.0038,
            color: '#556B2F',
            angle: Math.PI * 1.1,
            eccentricity: 0.141,
            inclination: 17.7,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 6100000000,
                e: 0.141,
                i: 17.7,
                omega: 213.4,
                w: 95.1
            },
            info: {
                type: 'Possible Dwarf Planet',
                diameter: '820 km',
                year: '270 Earth years',
                discoveredBy: 'Chad Trujillo, Mike Brown (2002)',
                status: 'One of the largest unnamed objects'
            }
        },

        // 🌊 Trans-Neptunian Objects (Smaller candidates)
        {
            name: 'Altjira',
            realRadius: 166.5,
            realDistance: 6300000000,
            speed: 0.0036,
            color: '#8B4513',
            angle: Math.PI * 1.5,
            eccentricity: 0.072,
            inclination: 5.2,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 6300000000,
                e: 0.072,
                i: 5.2,
                omega: 292.4,
                w: 123.8
            },
            moons: [
                {
                    name: 'Altjira I',
                    realRadius: 83.5,
                    realDistance: 6030,
                    speed: 30.9,
                    color: '#A0522D',
                    angle: 0
                }
            ],
            info: {
                type: 'Small TNO',
                diameter: '333 km',
                year: '296 Earth years',
                discoveredBy: 'Scott Sheppard, Chad Trujillo (2001)',
                note: 'Equal-sized binary system'
            }
        },
        {
            name: 'Borasisi',
            realRadius: 139,
            realDistance: 6600000000,
            speed: 0.0034,
            color: '#CD5C5C',
            angle: Math.PI * 0.2,
            eccentricity: 0.017,
            inclination: 0.6,
            type: 'dwarf-planet',
            region: 'Kuiper Belt',
            path: {
                a: 6600000000,
                e: 0.017,
                i: 0.6,
                omega: 199.0,
                w: 288.3
            },
            moons: [
                {
                    name: 'Pabu',
                    realRadius: 109,
                    realDistance: 4660,
                    speed: 44.9,
                    color: '#F4A460',
                    angle: 0
                }
            ],
            info: {
                type: 'Small TNO Binary',
                diameter: '278 km',
                year: '299 Earth years',
                discoveredBy: 'Deep Ecliptic Survey (1999)',
                note: 'Named after Kurt Vonnegut characters'
            }
        }
    ];
}