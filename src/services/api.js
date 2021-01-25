export  default class Api {

    _apiBase = 'https://rickandmortyapi.com/api';

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Couldn't fetch ${this._apiBase}${url}, recieved ${res.status}`)
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`/character`);
        return res.results.map(this._transformCharacter);
    };

    getCharacter = async (id) => {
        const character = await this.getResource(`/character/${id}`);
        return this._transformCharacter(character);
    };

    getAllLocations = async () => {
        const res = await this.getResource(`/location`);
        return res.results.map(this._transformLocation);
    };

    getLocation = async (id) => {
        const location = await this.getResource(`/location/${id}`)
        return this._transformLocation(location);
    };

    getAllEpisodes = async () => {
        const res = await this.getResource(`/episode`);
        return res.results.map(this._transformEpisode);
    };

    getEpisode = async (id) => {
        const episode = await this.getResource(`/episode/${id}`)
        return this._transformEpisode(episode);
    };

    _transformCharacter = (character) => {
        return {
            id: character.id,
            imgURL: character.image,
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender
        }
    };

    _transformLocation = (location) => {
        return {
            id: location.id,
            name: location.name,
            type: location.type,
            dimension: location.dimension
        }
    };

    _transformEpisode = (episode) => {
        return {
            id: episode.id,
            name: episode.name,
            air_date: episode.air_date,
            episode: episode.episode
        }
    }
}