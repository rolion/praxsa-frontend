import { Component, HostListener, ViewChild } from '@angular/core';
import { DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiDataServiceService } from 'app/services/api-backend/api-data-service.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [RouterLink, NgxDatatableModule, FormsModule,
    ReactiveFormsModule,ToastrModule],
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.scss'
})
export class MarcaComponent {
  rows: string[] = [];
  temp: string[] = [];
  loadingIndicator = true;
  reorderable = true;
  scrollBarHorizontal = window.innerWidth < 1200;
  brand!: UntypedFormGroup;

  offset: number = 0
  size: number =10
  count: number =10
  next: string = ''
  previous: string = ''
  textToSearch: string = ''

  @ViewChild('table') table!: DatatableComponent;
  formBuilder: FormBuilder = new FormBuilder();

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private apiService: ApiDataServiceService) {
    
  }
  ngOnInit(){
    this.brand = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      is_enable:[true]
    });
    this.getDataTableData(1, '');
  }

  getDataTableData(page: number, text: string){
    this.apiService.get('/product/carbrands/search', `/?page=${page}&text=${text}`).subscribe(data=>{
      console.log(data)
      this.temp = [...data.results];
      this.rows = data.results;
      this.count = data.count
      this.size = data.results.length
      this.loadingIndicator = false;
    })
  }

  onAddRowSave(newBrand: UntypedFormGroup){
    console.log(newBrand.value)
    this.apiService.post('product/carbrands/', newBrand.value)
    .pipe(catchError((error: any) => {
      if (error.status == 400){
        if (error.error['name'])
          throw new Error(error.error.name[0])
      }
      throw new Error('Error del server, contactar al administrador')
      
    }))
    .subscribe({
      next: data =>{
        this.temp.push(data)
        this.rows = []
        this.rows = [...this.temp]
        newBrand.reset();
        this.modalService.dismissAll();
        this.addRecordSuccess();
        this.loadingIndicator = false;
        let page=1
        this.getDataTableData(page, this.textToSearch)
      },
      error: (error) => {
        newBrand.reset();
        this.modalService.dismissAll();
        this.loadingIndicator = false;
        this.toastr.error(error);
        console.log('error', error)
      }
    })
    
  }
  addRecordSuccess() {
    this.toastr.success('Marca Agregada', '');
  }

    // add new record
  addRow(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  editRow(row: any, rowIndex: number, content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    console.log(row)
    this.brand.setValue({
      id: row.id,
      name: row.name,
      is_enable: row.is_enable
    });
    // this.selectedRowData = row;
  }
  onEditRowSave(brand: any){
    console.log(brand.value)
    this.apiService.put(`product/carbrands/${brand.value.id}/`, brand.value).subscribe(res=>{
      console.log(res)
      let page=this.offset +1
      this.getDataTableData(page, this.textToSearch)
      this.brand.reset();
      this.modalService.dismissAll();
      this.addRecordSuccess();
      this.loadingIndicator = false;
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.table.recalculate();
    this.table.recalculateColumns();
  }

  getRowHeight(row: any) {
    return row.height;
  }

  updateFilter(event: any) {
    this.textToSearch = event.target.value.toLowerCase();
    this.getDataTableData(1, this.textToSearch)
  }
  onFooterPage(event: any) {
    console.log('onFootPage event ', event)
    let page=event.offset +1
    this.getDataTableData(page, this.textToSearch)
  }
}
