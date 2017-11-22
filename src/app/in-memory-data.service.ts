import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const credentials = [
      {username: "shammi", password: "password", sessionid: "123456"},
      {username: "shammi1", password: "password", sessionid: "7891011"},
      {username: "shammi3", password: "password", sessionid: "789111"},
      {username: "shammi2", password: "password", sessionid: "121314"}
    ];
    const users = [
      {username: "shammi", email: "shammi@gmail.com" ,password: "password", fname: "SHAMMI", lname: 'HANS', avatar: '/assets/img/user0.png'},
      {username: "shammi1", email: "shammi1@gmail.com" ,password: "password", fname: "ABC", lname: 'XYZ', avatar: '/assets/img/user1.png'},
      {username: "shammi3", email: "shammi3@gmail.com" ,password: "password", fname: "DEF", lname: 'UVW', avatar: '/assets/img/user2.png'},
      {username: "shammi4", email: "shammi4@gmail.com" ,password: "password", fname: "JKL", lname: 'OPQ', avatar: '/assets/img/user3.png'},
      {username: "shammi2", email: "shamm2@gmail.com" ,password: "password", fname: "GHI", lname: 'RST', avatar: '/assets/img/user4.png'}
    ];
    return {credentials, users};
  }
}