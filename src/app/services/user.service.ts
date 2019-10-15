import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  base = "http://localhost:4000/api/users";
  getAll() {
    return this.http.get(this.base);
  }
  add(user: User) {
    return this.http.post(this.base, user);
  }
  getById(id) {
    return this.http.get(this.base + "/" + id);
  }
  delete(id) {
    return this.http.get(this.base + "/" + id);
  }
  editUser(id,user: User) {
    return this.http.put(this.base + "/" + id, user);
  }
}
