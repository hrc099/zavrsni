export class Sadrzaj {

	public _id?: string;
	public pic: boolean;
	public category?: string;
	public author: string;
	public name: string;
	public text: string;
	public img?: string;
	public moreImg?: Array<string>;

	constructor(pic, category, author, name, text, img?, moreImg?) { }
}
