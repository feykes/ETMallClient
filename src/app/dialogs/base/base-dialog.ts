import { MatDialogRef } from "@angular/material/dialog";
//isim verdik
export class BaseDialog<DialogComponent> {
    constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

    close() {
        this.dialogRef.close();
    }
}
