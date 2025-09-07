export function initComets(system) {
    system.comets = [
        {
            name: "Halley's Comet",
            realRadius: 5.5,
            perihelion: 87700000, // closest to Sun (km)
            aphelion: 5250000000, // farthest from Sun (km)
            period: 76, // years
            eccentricity: 0.967,
            speed: 0.013,
            color: '#87CEEB',
            angle: 0,
            type: 'comet',
            info: {
                type: 'Periodic Comet',
                period: '76 years',
                lastPerihelion: '1986',
                nextPerihelion: '2061',
                nucleus: '15 × 8 × 8 km',
                discovered: '240 BC (first recorded)',
                significance: 'Most famous periodic comet'
            }
        },
        {
            name: 'Comet NEOWISE',
            realRadius: 2.5,
            perihelion: 43000000,
            aphelion: 71500000000,
            period: 6800,
            eccentricity: 0.999,
            speed: 0.0001,
            color: '#ADD8E6',
            angle: Math.PI * 0.4,
            type: 'comet',
            info: {
                type: 'Long-period Comet',
                period: '6,800 years',
                lastPerihelion: '2020',
                nextPerihelion: '~8820 AD',
                nucleus: '5 km diameter',
                discovered: '2020',
                significance: 'Brightest comet of 2020, visible to naked eye'
            }
        },
        {
            name: 'Comet Hale-Bopp',
            realRadius: 30,
            perihelion: 137000000,
            aphelion: 52500000000,
            period: 2533,
            eccentricity: 0.995,
            speed: 0.0002,
            color: '#E6E6FA',
            angle: Math.PI * 0.8,
            type: 'comet',
            info: {
                type: 'Long-period Comet',
                period: '2,533 years',
                lastPerihelion: '1997',
                nextPerihelion: '4380',
                nucleus: '60 km diameter',
                discovered: '1995',
                significance: 'One of the brightest comets of 20th century'
            }
        },
        {
            name: 'Comet Hyakutake',
            realRadius: 2,
            perihelion: 35700000,
            aphelion: 110000000000,
            period: 17000,
            eccentricity: 0.9998,
            speed: 0.00005,
            color: '#AFEEEE',
            angle: Math.PI * 1.2,
            type: 'comet',
            info: {
                type: 'Long-period Comet',
                period: '17,000 years',
                lastPerihelion: '1996',
                nextPerihelion: '~19,000 AD',
                nucleus: '4.2 km diameter',
                discovered: '1996',
                significance: 'Close approach to Earth (0.1 AU) in 1996'
            }
        },
        {
            name: 'Comet ISON',
            realRadius: 1,
            perihelion: 2800000,
            aphelion: 88000000000,
            period: 400000,
            eccentricity: 0.999,
            speed: 0.00001,
            color: '#F0FFFF',
            angle: Math.PI * 1.5,
            type: 'comet',
            info: {
                type: 'Sungrazing Comet',
                period: '400,000 years',
                lastPerihelion: '2013 (disintegrated)',
                nucleus: '1.2 km diameter',
                discovered: '2012',
                significance: 'Disintegrated during close solar approach'
            }
        },
        {
            name: 'Comet Borrelly',
            realRadius: 4,
            perihelion: 136000000,
            aphelion: 8800000000,
            period: 6.8,
            eccentricity: 0.624,
            speed: 0.002,
            color: '#B0E0E6',
            angle: Math.PI * 0.2,
            type: 'comet',
            info: {
                type: 'Short-period Comet',
                period: '6.8 years',
                lastPerihelion: '2022',
                nextPerihelion: '2028',
                nucleus: '8 × 4 × 4 km',
                discovered: '1904',
                significance: 'Visited by Deep Space 1 spacecraft in 2001'
            }
        },
        {
            name: 'Comet Encke',
            realRadius: 2.4,
            perihelion: 50700000,
            aphelion: 620000000,
            period: 3.3,
            eccentricity: 0.847,
            speed: 0.003,
            color: '#87CEFA',
            angle: Math.PI * 0.6,
            type: 'comet',
            info: {
                type: 'Short-period Comet',
                period: '3.3 years',
                lastPerihelion: '2023',
                nextPerihelion: '2026',
                nucleus: '4.8 km diameter',
                discovered: '1786',
                significance: 'Shortest orbital period of any known comet'
            }
        },
        {
            name: 'Comet Churyumov-Gerasimenko',
            realRadius: 1.7,
            perihelion: 186000000,
            aphelion: 850000000,
            period: 6.45,
            eccentricity: 0.641,
            speed: 0.002,
            color: '#E0FFFF',
            angle: Math.PI * 1.8,
            type: 'comet',
            info: {
                type: 'Short-period Comet',
                period: '6.45 years',
                lastPerihelion: '2021',
                nextPerihelion: '2028',
                nucleus: '4.1 × 3.3 × 1.8 km',
                discovered: '1969',
                significance: 'Visited by Rosetta spacecraft (2014-2016)'
            }
        },
        {
            name: 'Comet Wild 2',
            realRadius: 2.5,
            perihelion: 160000000,
            aphelion: 5500000000,
            period: 6.4,
            eccentricity: 0.540,
            speed: 0.002,
            color: '#B0C4DE',
            angle: Math.PI * 0.1,
            type: 'comet',
            info: {
                type: 'Short-period Comet',
                period: '6.4 years',
                lastPerihelion: '2022',
                nextPerihelion: '2028',
                nucleus: '5.5 km diameter',
                discovered: '1978',
                significance: 'Visited by Stardust spacecraft (collected samples)'
            }
        },
        {
            name: 'Comet Tempel 1',
            realRadius: 3,
            perihelion: 150000000,
            aphelion: 4400000000,
            period: 5.5,
            eccentricity: 0.519,
            speed: 0.0025,
            color: '#D1E0E0',
            angle: Math.PI * 0.3,
            type: 'comet',
            info: {
                type: 'Short-period Comet',
                period: '5.5 years',
                lastPerihelion: '2021',
                nextPerihelion: '2026',
                nucleus: '7.6 × 4.9 km',
                discovered: '1867',
                significance: 'Target of Deep Impact mission (2005)'
            }
        },
        {
            name: 'Comet Lovejoy',
            realRadius: 2,
            perihelion: 190000000,
            aphelion: 100000000000,
            period: 8000,
            eccentricity: 0.998,
            speed: 0.0001,
            color: '#AFEEEE',
            angle: Math.PI * 0.5,
            type: 'comet',
            info: {
                type: 'Long-period Comet',
                period: '8,000 years',
                lastPerihelion: '2015',
                nextPerihelion: '~10,015 AD',
                nucleus: '5 km diameter',
                discovered: '2014',
                significance: 'Survived close approach to the Sun'
            }
        },
        {
            name: 'Comet McNaught',
            realRadius: 15,
            perihelion: 25000000,
            aphelion: 67000000000,
            period: 92000,
            eccentricity: 0.999,
            speed: 0.00005,
            color: '#F0F8FF',
            angle: Math.PI * 0.7,
            type: 'comet',
            info: {
                type: 'Long-period Comet',
                period: '92,000 years',
                lastPerihelion: '2007',
                nextPerihelion: '~93,000 AD',
                nucleus: '25 km diameter',
                discovered: '2006',
                significance: 'Brightest comet in over 40 years'
            }
        },
        {
            name: 'Comet Swift-Tuttle',
            realRadius: 13,
            perihelion: 95000000,
            aphelion: 51000000000,
            period: 133,
            eccentricity: 0.960,
            speed: 0.001,
            color: '#E6E6FA',
            angle: Math.PI * 0.9,
            type: 'comet',
            info: {
                type: 'Periodic Comet',
                period: '133 years',
                lastPerihelion: '1992',
                nextPerihelion: '2125',
                nucleus: '26 km diameter',
                discovered: '1862',
                significance: 'Parent body of Perseid meteor shower'
            }
        },
        {
            name: 'Comet Ikeya-Seki',
            realRadius: 3,
            perihelion: 1800000,
            aphelion: 183000000000,
            period: 880,
            eccentricity: 0.999,
            speed: 0.00008,
            color: '#FFFACD',
            angle: Math.PI * 1.1,
            type: 'comet',
            info: {
                type: 'Sungrazing Comet',
                period: '880 years',
                lastPerihelion: '1965',
                nextPerihelion: '2845',
                nucleus: '5 km diameter',
                discovered: '1965',
                significance: 'One of the brightest comets of last millennium'
            }
        },
        {
            name: 'Comet Shoemaker-Levy 9',
            realRadius: 2,
            perihelion: 74000000,
            aphelion: 8000000000,
            period: 17.8,
            eccentricity: 0.206,
            speed: 0.001,
            color: '#D3D3D3',
            angle: Math.PI * 1.4,
            type: 'comet',
            info: {
                type: 'Jupiter-family Comet',
                period: '17.8 years',
                lastPerihelion: '1992 (fragmented)',
                nucleus: 'Fragmented (original ~5 km)',
                discovered: '1993',
                significance: 'Collided with Jupiter in 1994 (first observed comet collision)'
            }
        }
    ];
}