import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handle(snackBar: MatSnackBar) {
    return (error: HttpErrorResponse) => {
      const self = this;
      if (error.status === 401)
        snackBar.open("Unauthorized action", "", { duration: 3000 });
      else if (error.status === 400)
        snackBar.open("Bad input", "", { duration: 3000 });
      else if (error.status === 403)
        snackBar.open("You cannot perform this action", "", { duration: 3000 });
      else if (error.status >= 500)
        snackBar.open("Server error", "", { duration: 3000 })
    }
  }
}
