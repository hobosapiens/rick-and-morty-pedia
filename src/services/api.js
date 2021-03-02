export default class Api {

    _apiBase = 'https://rickandmortyapi.com/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${this._apiBase}${url}, recieved ${res.status}`)
        }
        return await res.json();
    }

    getAllCharacters = async (page) => {
        const res = await this.getResource(`/character/?page=${page}`);
        return res.results.map(this._transformCharacter);
    };

    getAllCharactersInfo = async (page) => {
        const res = await this.getResource(`/character/?page=${page}`);
        return res.info;
    };

    getCharacter = async (id) => {
        const character = await this.getResource(`/character/${id}`);
        return this._transformCharacter(character);
    };

    getCharacterImage = (id) => {
        return `${this._apiBase}/character/avatar/${id}.jpeg`;
    };

    getAllLocations = async (page) => {
        const res = await this.getResource(`/location/?page=${page}`);
        return res.results.map(this._transformLocation);
    };

    getAllLocationsInfo = async (page) => {
        const res = await this.getResource(`/location/?page=${page}`);
        return res.info;
    };

    getLocation = async (id) => {
        const location = await this.getResource(`/location/${id}`);
        return this._transformLocation(location);
    };

    getAllEpisodes = async (page) => {
        const res = await this.getResource(`/episode/?page=${page}`);
        return res.results.map(this._transformEpisode);
    };

    getAllEpisodesInfo = async (page) => {
        const res = await this.getResource(`/episode/?page=${page}`);
        return res.info;
    };

    getEpisode = async (id) => {
        const episode = await this.getResource(`/episode/${id}`);
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
            dimension: location.dimension,
            residents: location.residents
        }
    };

    _transformEpisode = (episode) => {
        return {
            id: episode.id,
            name: episode.name,
            air_date: episode.air_date,
            episode: episode.episode,
            characters: episode.characters
        }
    }
}