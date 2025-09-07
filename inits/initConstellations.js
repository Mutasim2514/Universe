export function initConstellations(system) {
    system.constellations = [
        {
            name: 'Aries',
            commonName: 'The Ram',
            stars: [
                {x: 50, y: -120, brightness: 2.0, name: 'Hamal'},
                {x: 85, y: -105, brightness: 2.6, name: 'Sheratan'},
                {x: 95, y: -115, brightness: 3.9, name: 'Mesarthim'},
                {x: 45, y: -85, brightness: 4.4, name: '41 Arietis'}
            ],
            lines: [[0,1], [1,2], [0,3]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Ram',
                bestView: 'December',
                notableFeatures: 'First sign of the zodiac'
            }
        },
        {
            name: 'Taurus',
            commonName: 'The Bull',
            stars: [
                {x: 150, y: -60, brightness: 0.9, name: 'Aldebaran'},
                {x: 220, y: -20, brightness: 1.7, name: 'Elnath'},
                {x: 130, y: -35, brightness: 3.5, name: 'Epsilon Tauri'},
                {x: 95, y: -50, brightness: 3.0, name: 'Delta Tauri'},
                {x: 175, y: -25, brightness: 3.6, name: 'Zeta Tauri'},
                {x: 195, y: -45, brightness: 3.4, name: 'Gamma Tauri'},
                {x: 125, y: -85, brightness: 4.3, name: 'Lambda Tauri'}
            ],
            lines: [[0,6], [6,3], [3,2], [2,4], [4,5], [5,1], [1,0]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Bull',
                bestView: 'January',
                notableFeatures: 'Contains Pleiades and Hyades star clusters'
            }
        },
        {
            name: 'Gemini',
            commonName: 'The Twins',
            stars: [
                {x: 280, y: 40, brightness: 1.2, name: 'Castor'},
                {x: 245, y: 65, brightness: 1.1, name: 'Pollux'},
                {x: 200, y: 120, brightness: 2.9, name: 'Alhena'},
                {x: 320, y: 85, brightness: 3.5, name: 'Mebsuta'},
                {x: 275, y: 140, brightness: 3.1, name: 'Wasat'},
                {x: 165, y: 135, brightness: 3.8, name: 'Tejat'},
                {x: 350, y: 55, brightness: 4.1, name: 'Eta Geminorum'}
            ],
            lines: [[0,3], [3,6], [6,4], [4,2], [2,5], [5,1], [1,0]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Twins',
                bestView: 'February',
                notableFeatures: 'Contains Castor and Pollux, the twin stars'
            }
        },
        {
            name: 'Cancer',
            commonName: 'The Crab',
            stars: [
                {x: 380, y: 160, brightness: 3.5, name: 'Altarf'},
                {x: 340, y: 185, brightness: 4.3, name: 'Asellus Australis'},
                {x: 345, y: 155, brightness: 4.7, name: 'Asellus Borealis'},
                {x: 310, y: 195, brightness: 4.2, name: 'Acubens'},
                {x: 395, y: 135, brightness: 5.2, name: 'Iota Cancri'}
            ],
            lines: [[0,4], [4,2], [2,1], [1,3]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Crab',
                bestView: 'March',
                notableFeatures: 'Contains the Beehive Cluster'
            }
        },
        {
            name: 'Leo',
            commonName: 'The Lion',
            stars: [
                {x: 320, y: 240, brightness: 1.4, name: 'Regulus'},
                {x: 245, y: 215, brightness: 2.1, name: 'Algieba'},
                {x: 210, y: 185, brightness: 2.6, name: 'Adhafera'},
                {x: 185, y: 155, brightness: 3.4, name: 'Ras Elased'},
                {x: 125, y: 285, brightness: 2.1, name: 'Denebola'},
                {x: 275, y: 275, brightness: 3.9, name: 'Zosma'},
                {x: 295, y: 310, brightness: 2.6, name: 'Chertan'}
            ],
            lines: [[3,2], [2,1], [1,0], [0,5], [5,6], [6,4]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Lion',
                bestView: 'April',
                notableFeatures: 'Sickle asterism, contains Regulus'
            }
        },
        {
            name: 'Virgo',
            commonName: 'The Maiden',
            stars: [
                {x: 125, y: 385, brightness: 1.0, name: 'Spica'},
                {x: 45, y: 315, brightness: 2.7, name: 'Zavijava'},
                {x: 85, y: 285, brightness: 3.4, name: 'Porrima'},
                {x: 145, y: 255, brightness: 2.8, name: 'Auva'},
                {x: 205, y: 225, brightness: 3.9, name: 'Vindemiatrix'},
                {x: 15, y: 345, brightness: 3.4, name: 'Minelauva'},
                {x: 165, y: 315, brightness: 4.1, name: 'Heze'}
            ],
            lines: [[4,3], [3,2], [2,1], [1,5], [2,6], [6,0]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Maiden',
                bestView: 'May',
                notableFeatures: 'Largest zodiac constellation, contains Spica'
            }
        },
        {
            name: 'Libra',
            commonName: 'The Scales',
            stars: [
                {x: -35, y: 315, brightness: 2.6, name: 'Zubeneschamali'},
                {x: -65, y: 345, brightness: 2.8, name: 'Zubenelgenubi'},
                {x: -95, y: 285, brightness: 3.9, name: 'Zubenelakrab'},
                {x: -125, y: 255, brightness: 4.5, name: 'Brachium'}
            ],
            lines: [[0,1], [0,2], [2,3]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Scales',
                bestView: 'June',
                notableFeatures: 'Only zodiac constellation representing an object'
            }
        },
        {
            name: 'Scorpius',
            commonName: 'The Scorpion',
            stars: [
                {x: -125, y: 225, brightness: 1.1, name: 'Antares'},
                {x: -95, y: 195, brightness: 2.3, name: 'Graffias'},
                {x: -65, y: 165, brightness: 2.6, name: 'Dschubba'},
                {x: -35, y: 135, brightness: 2.3, name: 'Pi Scorpii'},
                {x: -155, y: 255, brightness: 2.3, name: 'Sargas'},
                {x: -185, y: 285, brightness: 1.6, name: 'Shaula'},
                {x: -205, y: 315, brightness: 2.7, name: 'Lesath'},
                {x: -225, y: 345, brightness: 3.9, name: 'Upsilon Scorpii'}
            ],
            lines: [[3,2], [2,1], [1,0], [0,4], [4,5], [5,6], [6,7]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Scorpion',
                bestView: 'July',
                notableFeatures: 'Contains bright red star Antares'
            }
        },
        {
            name: 'Sagittarius',
            commonName: 'The Archer',
            stars: [
                {x: -255, y: 255, brightness: 1.8, name: 'Kaus Australis'},
                {x: -285, y: 225, brightness: 2.7, name: 'Nunki'},
                {x: -225, y: 195, brightness: 2.8, name: 'Ascella'},
                {x: -195, y: 225, brightness: 3.1, name: 'Kaus Media'},
                {x: -165, y: 195, brightness: 2.9, name: 'Kaus Borealis'},
                {x: -315, y: 195, brightness: 3.2, name: 'Albaldah'},
                {x: -345, y: 165, brightness: 2.6, name: 'Nash'},
                {x: -285, y: 165, brightness: 4.0, name: 'Tau Sagittarii'}
            ],
            lines: [[6,5], [5,1], [1,7], [7,2], [2,3], [3,0], [0,4], [4,3]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Archer',
                bestView: 'August',
                notableFeatures: 'Points toward the center of the Milky Way'
            }
        },
        {
            name: 'Capricornus',
            commonName: 'The Sea Goat',
            stars: [
                {x: -345, y: 65, brightness: 3.6, name: 'Deneb Algedi'},
                {x: -375, y: 35, brightness: 3.1, name: 'Dabih'},
                {x: -315, y: 35, brightness: 3.8, name: 'Nashira'},
                {x: -285, y: 5, brightness: 4.5, name: 'Alshat'},
                {x: -255, y: 65, brightness: 4.1, name: 'Prima Giedi'},
                {x: -255, y: 55, brightness: 4.3, name: 'Secunda Giedi'}
            ],
            lines: [[1,2], [2,3], [3,4], [4,5], [5,0], [0,2]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Sea Goat',
                bestView: 'September',
                notableFeatures: 'Faintest zodiac constellation'
            }
        },
        {
            name: 'Aquarius',
            commonName: 'The Water Bearer',
            stars: [
                {x: -225, y: -35, brightness: 2.9, name: 'Sadalsuud'},
                {x: -195, y: -65, brightness: 3.3, name: 'Sadalmelik'},
                {x: -165, y: -95, brightness: 3.8, name: 'Skat'},
                {x: -135, y: -125, brightness: 4.2, name: 'Albali'},
                {x: -285, y: 5, brightness: 3.7, name: 'Ancha'},
                {x: -315, y: -35, brightness: 4.5, name: 'Sadachbia'},
                {x: -255, y: -65, brightness: 4.3, name: 'Sadaltager'}
            ],
            lines: [[4,5], [5,6], [6,0], [0,1], [1,2], [2,3]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Water Bearer',
                bestView: 'October',
                notableFeatures: 'Contains the Helix Nebula'
            }
        },
        {
            name: 'Pisces',
            commonName: 'The Fishes',
            stars: [
                {x: -135, y: -185, brightness: 3.6, name: 'Alrescha'},
                {x: -105, y: -215, brightness: 3.7, name: 'Eta Piscium'},
                {x: -75, y: -245, brightness: 4.1, name: 'Omega Piscium'},
                {x: -45, y: -275, brightness: 4.5, name: 'Delta Piscium'},
                {x: -15, y: -305, brightness: 4.3, name: 'Epsilon Piscium'},
                {x: 15, y: -275, brightness: 4.8, name: 'Zeta Piscium'},
                {x: -165, y: -155, brightness: 4.1, name: 'Fumalsamakah'},
                {x: -195, y: -125, brightness: 3.8, name: 'Beta Piscium'},
                {x: -225, y: -155, brightness: 4.9, name: 'Gamma Piscium'}
            ],
            lines: [[0,6], [6,7], [7,8], [0,1], [1,2], [2,3], [3,4], [4,5]],
            info: {
                type: 'Zodiac Constellation',
                meaning: 'The Fishes',
                bestView: 'November',
                notableFeatures: 'Contains the Vernal Equinox point'
            }
        }
    ];
}