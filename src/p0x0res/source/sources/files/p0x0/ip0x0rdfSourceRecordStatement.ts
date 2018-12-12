import {ip0x0, p0x0} from "../../../../../p0x0/p0x0";
import {p0x0rdfSourceRecordStatementNode} from "./ip0x0rdfSourceRecordStatementNode";

export interface ip0x0rdfSourceRecordStatement extends ip0x0 {
    subject: p0x0rdfSourceRecordStatementNode;
    predicate: p0x0rdfSourceRecordStatementNode;
    why: p0x0rdfSourceRecordStatementNode;
    object: p0x0rdfSourceRecordStatementNode;
}

export class p0x0rdfSourceRecordStatement extends p0x0 implements ip0x0rdfSourceRecordStatement{
    subject: p0x0rdfSourceRecordStatementNode = null;
    predicate: p0x0rdfSourceRecordStatementNode = null;
    why: p0x0rdfSourceRecordStatementNode = null;
    object: p0x0rdfSourceRecordStatementNode = null;
}