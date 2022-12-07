export interface Employee {
    id: number,
    name: string,
    gender: string,
    email: any,
    phoneNumber: number,
    contactPreference: any,
    DOB:Date;
    position:string;
    // isAvtive?: boolean;
    imageUrl: any;
    package:any;
    Address:any;
}

export class Book {
    id: number=0;
    author_one: string="";
    author_two: string="";
    author_three: string="";
    title: string="";
    subtitle: string="";
    publisher: string="";
    year: Date=new Date();
    city: string="";
    edition: number=0;
       volume: number=0;
       pages: number=0;
      ISBN: string="";
    barcode: string="";
    }