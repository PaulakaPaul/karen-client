import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private snackBar: MatSnackBar) { }

  handle(error: HttpErrorResponse) {
    if (error.status === 401)
      this.snackBar.open("Unauthorized action", "", { duration: 3000 });
  }
}
