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
        return res.results;
    }

    getCharacter(id){
        return this.getResource(`/character/${id}`)
    }

    async getAllLocations(){
        const res = await this.getResource(`/location`);
        return res.results;
    }

    getLocation(id){
        return this.getResource(`/location/${id}`)
    }

    async getAllEpisodes(){
        const res = await this.getResource(`/episode`);
        return res.results;
    }

    getEpisode(id){
        return this.getResource(`/episode/${id}`)
    }
}