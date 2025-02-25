export interface Shows {
    id: number;
    name: string;
    category: Category;
}

export interface Category {
    id: number;
    name: string;
}

export interface SeasonDetails {
    id: number;
    seasonName: string;
    description: string;
}

export interface ShowDetailsResponse {
    seasonId: number;
    seasonName: string;
    episodeId: number;
    episodeName: string;
    episodeNo: number;
    episodeScore: number;
    episodeStatus: string;
}