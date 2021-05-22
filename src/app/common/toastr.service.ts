import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

declare let toastrService:ToastrService;
@Injectable()
export class ToasterService{
  
    success(message: string, title?: string){
        toastrService.success(message, title)
    }
    info(message: string, title?: string){
        toastrService.info(message, title)
    }
    warning(message: string, title?: string){
        toastrService.warning(message, title)
    }
    error(message: string, title?: string){
        toastrService.error(message, title)
    }
}