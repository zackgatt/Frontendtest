import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  transform(user: any, searchName: string): any {
    if (!user || !searchName) {
      return user;
    }

    return user.filter(user =>
      user.name.toLocaleLowerCase().indexOf(searchName.toLocaleLowerCase()) !== -1);
  }

}
