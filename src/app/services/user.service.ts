import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_SERVER = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
  }
  // public sendUpdateRequest(updatedUser:any){
  //   console.log("%%%")
  //   console.log(updatedUser);
  //   // return this.httpClient.put(this.REST_API_SERVER).pipe(catchError(this.handleError));
  // }

  public deleteUserRequest(userId:string){
    console.log(userId);
    return this.httpClient.delete(this.REST_API_SERVER+'/'+userId).pipe(catchError(this.handleError));
  }

  // public addNewContact(newUserContact:any){
  //   console.log("%%%")
  //   return this.httpClient.post(this.REST_API_SERVER).pipe(catchError(this.handleError));
  // }

}
