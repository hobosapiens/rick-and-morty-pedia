export  default class Api {

    _apiBase = 'https://rickandmortyapi.com/api';

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Couldn't fetch ${this._apiBase}${url}, recieved ${res.status}`)
        }
        return await res.json();
    }

    async getAllCharacters(){
        const res = await this.getResource(`/character`);
        return res.results.map(this._transformCharacter);
    }

    async getCharacter(id){
        const character = await this.getResource(`/character/${id}`);
        return this._transformCharacter(character);
    }

    async getAllLocations(){
        const res = await this.getResource(`/location`);
        return res.results.map(this._transformLocation);
    }

    async getLocation(id){
        const location = await this.getResource(`/location/${id}`)
        return this._transformLocation(location);
    }

    async getAllEpisodes(){
        const res = await this.getResource(`/episode`);
        return res.results.map(this._transformEpisode());
    }

    async getEpisode(id){
        const episode = await this.getResource(`/episode/${id}`)
        return this._transformEpisode(episode);
    }

    _transformCharacter = (character) => {
        return {
            imgURL: character.image,
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            id: character.id
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

    _transformEpisode = (edpisode) => {
        return {
            id: edpisode.id,
            name: edpisode.name,
            air_date: edpisode.air_date,
            episode: edpisode.episode
        }
    }
}