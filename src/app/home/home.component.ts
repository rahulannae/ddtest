import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import * as FuzzySet from 'fuzzyset.js';
import { TestService } from '../test.service';
import { Multiple } from '../Multiple.model';
import { DomSanitizer } from '@angular/platform-browser';
// import *  as mammoth from 'mammoth';
// declare var require:any;
// declare var $window:any;
// var mammoth2=require("mammoth");
import * as mammoth from 'mammoth/mammoth.browser.js';
import * as docx from 'docx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import * as inlineCss from 'inline-css';
// import * as fs from "fs";
// declare var convertToHtml:any;
// import * as htmlToDocx from 'html-docx-js';
import htmlToDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';
import computedStyleToInlineStyle from 'computed-style-to-inline-style';


declare const Buffer;

interface SampleInterface {
  prop1: number;
  prop2: string;
  [props: number]: any;
}

// Create document


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  sampleForm: any;
  lastElement: string;
  suggestions: string[] = ['sugg', 'sugg1', 'sugg1', 'sugg2', 'sugg3', 'sugg4'];
  dis = false;
  splitString: string;
  splitArray: string[] = [];
  setA = new Set([1, 2, 3]);
  setB = new Set([5, 6, 7, 2]);
  dlistvar = 'rahul';
  options = ['op1', 'op2'];
  finalCourse: string[] = [];
  fileVar: File;
  iframeURL: string;

  search: string;
  strRes: string[] = ['rahul'];
  strArr: string[] = ['Java Developer', 'Java Developers with Capital Market Experience', 'Management Consultant', 'Associate-AssetManagement-InvestmentManagement', '.Net Architect', 'Senior Developer-C#', 'Senior Developer-WCF', 'Senior Developer-ASP', 'Senior Developer- SQL Server', 'Project Manager', 'Graphics Designer', 'CTO', 'Associate-AssetManagement-InvestmentManagement', 'Java Developer', 'Program Development', 'Software Engineer', 'Industrial Manager', 'Human Resource Manager', 'CTO', 'Graphics Designer', 'Project Manager'];
  books: any[] = [
    { title: 'The DaVinci Code', author: 'F. Scott Fitzgerald' },
    { title: 'The Great Gatsby', author: 'Dan Browns' },
    { title: 'Angels & Demons', author: 'Dan Louis' },
    { title: 'The Lost Symbol', author: 'David Maine' },
    { title: 'Old Man\'s War', author: 'Rob Grant' }];


  constructor(private tserv: TestService, private fb: FormBuilder, public sanitizer: DomSanitizer, private httpCliient: HttpClient) {
  }


  ngOnInit() {
    const headers = {
      headers: new HttpHeaders({
        'Accept': '*/*'
      })
    };
    this.httpCliient
      .get('http://localhost:3000/api/applicants/documents/download?reference=applicant-docs/e0ed1400-711b-11e9-8fac-5f271e591dfb', headers)
      .subscribe((res: any) => {
        console.log('GOT REF RESPONSE AS ', res);
        const data = res.Body.data;

        let binary = '';

        for (let i = 0; i < data.length; i++) {
          binary += String.fromCharCode(data[i]);
        }
        console.log('STUFF', binary);
        const base64 = window.btoa(binary);
        console.log('STUFF', base64);
        const x = document.createElement('a');
        x.href = binary;
        x.download = 'image.png';
        x.click();

      });


    //     var doc = new docx.Document();

    // // Add some content in the document
    // var paragraph = new docx.Paragraph("Some cool text here.");
    // // Add more text into the paragraph if you wish
    // paragraph.addRun(new docx.TextRun("Lorem Ipsum Foo Bar"));
    // doc.addParagraph(paragraph);

    // // Used to export the file into a .docx file
    // var packer = new docx.Packer();
    // packer.toBuffer(doc).then((buffer) => {
    //     fs.writeFileSync("My First Document.docx", buffer);
    // });

    // Done! A file called 'My First Document.docx' will be in your file system.



    window.scrollTo(0, 0);
    window.addEventListener('scroll', function (e) {
      const scroll = window.scrollY;
      const scrollElement = document.getElementById('scrollElement');
      if (scroll > 100) {
        scrollElement.classList.remove('initialScroll');
        scrollElement.classList.add('secondScroll');
      } else {
        scrollElement.classList.add('initialScroll');
        scrollElement.classList.remove('secondScroll');

      }

    });

    const toBeDestructArr = [1, 2, 3, 4, 5, 6];
    const toBeDestructObj = { a: 1, b: 2, c: 3 };
    console.log('BEFORE DESTRUCT______________-----------____________', toBeDestructArr, toBeDestructObj);
    const [n1, n2, ...n3] = toBeDestructArr;
    const { b, a, c } = toBeDestructObj;
    console.log(' DESTRUCTURED ELEMENTS ______________-----------____________', n1, n2, n3, a, b, c);
    const obj1 = { a: 'a', b: 'b', c: 'c' };
    const obj2 = { ...obj1, a: 'A', d: 'd' };
    function consoling(message: string) {
      console.log('IN CONSOLE FUNCTION**', message);
    }
    consoling('HEROBRO');
    console.log(' DESTRUCTURED ELEMENTS ______________-----------_______2_____', obj2);

    const fd = new FormData();
    //  fd.append("fname",new File())
    this.sampleForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      multiple: this.fb.array([this.fb.group(new Multiple())])
    });


    const fSet = new FuzzySet(['rhaul', 'rahul', 'annae']);
    console.log('NEWONEFUZZY', fSet.get('rhul'));
    console.log(fSet, '---------------------------------------');
    console.log('noDUPES', Array.from(new Set([1, 2.3, 4, 5, 6, 1, 2, 3, 10])));
    for (const i of Array.from(this.setA)) {
      console.log(i); // "0", "1", "2",
    }
    console.log(this.setDelete(this.setA, this.setB));

    const newAr: any[] = [];
    console.log(newAr, 'NEWLOG', newAr.push([2, 3, 4, 5]));

  }
  @HostListener('document:click', ['$event'])
  onKeyUp(ev: MouseEvent) {
    // do something meaningful with it
  }
  inputEvent(e, i) {
    const ele = document.getElementById(`${i}input`) as HTMLFormElement;

    if (ele.value.includes(e)) {
      ele.value = ele.value.replace('' + e + ', ', '');

      // this.sampleForm.multiple[i].course = ele.value;
      // console.log("ragnarok",this.sampleForm.multiple[i].course);
    } else {
      ele.value += e + ', ';
    }

    this.finalCourse[i] = ele.value;
    // this.sampleForm.multiple[i].course = ele.value;  this.multiples.controls[i].get('course')
  }
  showOpts(i: string) {
    document.getElementById(`${i}opts`).style.display = 'block';
  }
  hideOpts(i: string) {
    document.getElementById(`${i}opts`).style.display = 'none';

  }

  get multiples(): FormArray {
    return this.sampleForm.get('multiple') as FormArray;
  }
  addFields() {

    this.multiples.push(this.fb.group(new Multiple));
  }
  removeFields(i) {

    this.multiples.removeAt(i);
  }

  parseAr() {
    if (this.dlistvar.startsWith('"') && this.dlistvar.endsWith('"')) {
      while (this.dlistvar.includes('"')) {
        this.dlistvar =
          this.dlistvar.slice(0, this.dlistvar.indexOf('"')) +
          this.dlistvar.slice(this.dlistvar.indexOf('"') + 1, this.dlistvar.length);
      }
      this.strRes = this.strArr.filter(val => RegExp(this.dlistvar, 'i').test(val));
      const tar: string[] = ['java', 'java dev', 'dotner'];
    } else if (this.dlistvar.endsWith('*')) {
      while (this.dlistvar.includes('*')) {
        this.dlistvar = this.dlistvar.slice(0, this.dlistvar.indexOf('*')) + this.dlistvar.slice(this.dlistvar.indexOf('*') + 1, this.dlistvar.length);
      }
      this.strRes = this.strArr.filter(val => val.toLowerCase().includes(this.dlistvar.toLowerCase()));

    } else {
      let arrOfMatches: any[] = [];
      const strArr = Array.from(new Set(this.strArr));

      const fsr = FuzzySet(strArr);
      arrOfMatches = fsr.get(this.dlistvar);
      this.strRes = [];
      for (let i = 0; i < arrOfMatches.length; i++) {
        this.strRes[i] = arrOfMatches[i][1];
      }
    }
  }

  ngDoCheck() {
  }

  formSubmit() {
    //this.multiples.controls[i].get('course')
    //  this.finalCourse=this.finalCourse.substring(0,this.finalCourse.length-2);
    for (let i = 0; i < this.finalCourse.length; i++) {
      this.finalCourse[i] = this.finalCourse[i].substring(0, this.finalCourse[i].length - 2);
      this.multiples.controls[i].get('course').setValue(this.finalCourse[i]);
    }
    alert('YOUR FORM IS SUBMITTED');
    this.tserv.sendVal(this.sampleForm.value);
  }

  union(setA, setB) {
    const union = setA;
    // setB.array.forEach(element => {
    //   console.log("INLOOP");
    //   union.add(element);
    // });
    for (const elem of Array.from(setB)) {
      union.add(elem);
    }

    return union;
  }

  intersect(setA, setB) {
    const intersection = new Set();
    // setB.array.forEach(element => {
    //   console.log("INLOOP");
    //   union.add(element);
    // });
    for (const elem of Array.from(setB)) {

      if (setA.has(elem)) {
        intersection.add(elem);
      }
    }

    return intersection;
  }

  setDelete(setA, setB) {
    // setB.array.forEach(element => {
    //   console.log("INLOOP");
    //   union.add(element);
    // });
    for (const elem of Array.from(setB)) {

      setA.delete(elem);
    }

    return setA;
  }

  splitFunc(event) {
    this.splitArray = event.target.value.split(',');
    this.lastElement = this.splitArray[this.splitArray.length - 1];
  }
  addSugg(event) {
    this.splitString = this.splitString.substr(0, this.splitString.length - this.lastElement.length);
    this.splitString = this.splitString + event.target.innerHTML;
  }

  alertF() {
    alert('active');
  }
  cvar = 'orange';
  toggle() {
    this.dis = !this.dis;
    console.log(this.dis);
  }
  inputFile(e) {
    this.fileVar = e[0];
    console.log('FILEUPLOADED', this.fileVar, e);
    const fr = new FileReader();
    fr.readAsDataURL(this.fileVar);
    fr.onload = () => {
      console.log('DOCDATA AS  ', fr.result);
    };
    const fr2 = new FileReader();

    fr2.readAsArrayBuffer(this.fileVar);
    fr2.onload = () => {
      console.log('READ AS ARRAY BUFFFER CAN DISPLAY?', fr2.result);
      mammoth.convertToHtml({ arrayBuffer: fr2.result })
        .then(function (result) {
          const text = result.value;
          const messages = result.messages;
          console.log('MAMMOTH GENERATED HTML', text);
          document.getElementById('mammothHTML').innerHTML = text;
        });
    };
  }
  scrollHandler(e) {
    console.log('SCROLL EVENT FIRED', e);
  }

  docReplaceTest(file: File): void {
    console.log('READ FILE AS ', file);
    const fr = new FileReader();
    fr.readAsDataURL(file);
    const onload = () => {
      console.log('WHAT HAPPENING', fr.result);
    };
    fr.onload = onload;
  }

  checkInline() {
    const div = document.getElementById('inlineTest');
    console.log(div);
    // inlineCss(div.innerHTML).then((result) => {
    //   console.log('CONVERTED?', result);
    // // })

    const conv = computedStyleToInlineStyle(document.body, {
      recursive: true,
      properties: ['font-size', 'text-decoration', 'border', 'padding', 'margin', 'background-color']
    });
    const bigOne = document.body.innerHTML;
    this.checkDocx(bigOne);
    console.log('WORKS?', conv);

  }
  checkDocx(html?: string) {
    html = html ? html : ` <h2 style="color:red;background:black;padding:10px">HELLO MISTER</h2>`;
    const fullMatter = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        ${html}
    </body>
    </html>`;
    console.log(html);
    const converted = htmlToDocx.asBlob(html);
    saveAs(converted, 'works.docx');
    // inlineCss(div.innerHTML).then((result) => {
    //   console.log('CONVERTED?', result);
    // // })
  }

}
