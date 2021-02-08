export default class FakeApi {

    _characters = [
        {
            id: 1,
            name: '[TEST NAME 1]',
            status: 'alive',
            species: 'Human',
            gender: 'male'
        },
        {
            id: 2,
            name: '[TEST NAME 2]',
            status: 'dead',
            species: 'Human',
            gender: 'female'
        }
    ];

    _locations = [
        {
            id: 1,
            name: '[TEST LOCATION 1]',
            type: 'Testicle Monster Dimension',
            dimension: 'unknown'
        },
        {
            id: 2,
            name: '[TEST LOCATION 2]',
            type: 'Space station',
            dimension: 'Dimension'
        }
    ];

    _episodes = [
        {
            id: 1,
            name: '[TEST EPISODE 1]',
            "air_date": "September 10, 2017",
            "episode": "S03E07",
        },
        {
            id: 2,
            name: '[TEST EPISODE 2]',
            "air_date": "November 26, 2018",
            "episode": "S04E08",
        }
    ];

    getAllCharacters = async () => {
        return this._characters;
    };

    getCharacter = async (id) => {
        return this._characters[id - 1];
    };

    getAllLocations = async () => {
        return this._locations;
    };

    getLocation = async (id) => {
        return this._locations[id - 1]
    };

    getAllEpisodes = async () => {
        return this._episodes;
    };

    getEpisode = async (id) => {
        return this._episodes[id - 1];
    };

    getCharacterImage = () => {
        return `https://placeimg.com/400/500/people`
    };

}
