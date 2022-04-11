export class Quote {
    showDescription: boolean;
    constructor(
        id: number,
    public quote: string,
    public upvote:number,
    public downvote:number,
    public author: string,
    public completeDate:Date
    )
    {
        this.showDescription=false;
    }
}
