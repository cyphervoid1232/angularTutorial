import { DocumentChangeType, DocumentReference, DocumentData } from "@angular/fire/firestore";

interface DocumentChangeAction {
    //'added' | 'modified' | 'removed';
    type: DocumentChangeType;
    payload: DocumentChange;
  }
  
  interface DocumentChange {
    type: DocumentChangeType;
    doc: DocumentSnapshot;
    oldIndex: number;
    newIndex: number;
  }
  
  interface DocumentSnapshot {
    exists: boolean;
    ref: DocumentReference;
    id: string;
    // metadata: SnapshotMetadata;
    data(): DocumentData;
    get(fieldPath: string): any;
  }