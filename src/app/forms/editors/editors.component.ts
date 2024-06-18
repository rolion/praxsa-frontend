import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.sass'],
    standalone: true,
    imports: [RouterLink, CKEditorModule],
})
export class EditorsComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public Editor: any = ClassicEditor;
  // eslint-disable-next-line @typescript-eslint/no-empty-function

  constructor() {
    //constructor
  }
}
