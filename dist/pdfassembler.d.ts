import { PDFDocument } from 'pdfjs-dist/lib/core/document';
import { PDFManager } from 'pdfjs-dist/lib/core/pdf_manager';
export declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;
export declare type BinaryFile = Blob | File | ArrayBuffer | TypedArray;
export declare class PDFAssembler {
    pdfManager: PDFManager;
    userPassword: string;
    ownerPassword: string;
    nextNodeNum: number;
    pdfTree: any;
    recoveryMode: boolean;
    objCache: any;
    objCacheQueue: any;
    pdfManagerArrays: any[];
    pdfAssemblerArrays: any[];
    promiseQueue: any;
    indent: boolean | string | number;
    compress: boolean;
    encrypt: boolean;
    groupPages: boolean;
    pageGroupSize: number;
    pdfVersion: string;
    constructor(inputData?: BinaryFile | Object, userPassword?: string);
    readonly pdfDocument: Promise<PDFDocument>;
    readonly numPages: Promise<number>;
    readonly pdfObject: any;
    getPDFDocument(): Promise<PDFDocument>;
    countPages(): Promise<number>;
    getPDFStructure(): Promise<any>;
    toArrayBuffer(file: BinaryFile): Promise<ArrayBuffer>;
    resolveNodeRefs(node?: any, name?: any, parent?: any, contents?: boolean): any;
    pad(number: any, digits: any): string;
    toPdfDate(jsDate?: Date): string;
    fromPdfDate(pdfDate: string): Date;
    removeRootEntries(entries?: string[]): Promise<any>;
    flattenPageTree(pageTree?: any, parent?: any): any[];
    groupPageTree(pageTree?: any, parent?: any, groupSize?: number): any[];
    resetObjectIds(node?: any): void;
    assemblePdf(nameOrOutputFormat?: string): Promise<File | ArrayBuffer | Uint8Array>;
    arraysToBytes(arrays: any): any;
    bytesToString(bytes: any): any;
}