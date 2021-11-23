import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

// ************************************************* Boutique ************************************************* //

getBoutiques(): Observable<any> {

  const apiUrl = "http://localhost:3000/api/v1/boutiques";

  return this.http.get(apiUrl, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));

}


getBoutique(id:any): Observable<any> {

  const apiUrl = "http://localhost:3000/api/v1/boutique/" + id;

  return this.http.get(apiUrl, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));

}

createBoutique(data:any): Observable<any> {

  const apiUrl = "http://localhost:3000/api/v1/boutique/";

  return this.http.post(apiUrl, data, httpOptions).pipe(
    catchError(this.handleError));

}

updateBoutique(id:any, data:any) : Observable<any> {

  const apiUrl = "http://localhost:3000/api/v1/boutique/" + id;

  return this.http.put(apiUrl, data, httpOptions).pipe(
    catchError(this.handleError));
}

deleteBoutique(id:any) : Observable<any> {

  const apiUrl = "http://localhost:3000/api/v1/boutique/" + id;

  return this.http.delete(apiUrl, httpOptions).pipe(
    catchError(this.handleError));
}

  // ************************************************* Category ************************************************* //

  getCategories(id:any): Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/categories/" + id;

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }


  getCategory(id:any): Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/categorie/" + id;

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  createCategory(data:any): Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/categorie/";

    return this.http.post(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError));

  }

  updateCategory(id:any, data:any) : Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/categorie/" + id;

    return this.http.put(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError));
  }

  deleteCategory(id:any) : Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/categorie/" + id;

    return this.http.delete(apiUrl, httpOptions).pipe(
      catchError(this.handleError));
  }

  // ************************************************* Produit ************************************************* //

  getProduits(id:any): Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/produits/" + id;

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  getProduit(id:any): Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/produit/" + id;

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  createProduit(data:any): Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/produit/";

    return this.http.post(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError));

  }

  updateProduit(id:any, data:any) : Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/produit/" + id;

    return this.http.put(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError));
  }

  deleteProduit(id:any) : Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/produit/" + id;

    return this.http.delete(apiUrl, httpOptions).pipe(
      catchError(this.handleError));
  }
}
