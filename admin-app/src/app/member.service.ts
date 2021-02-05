import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { MessageService } from './message.service'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //アプリケーション全体で使える設定
})
export class MemberService {
  private membersUrl = "api/members";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: 社員一覧データを取得しました')
    //ofは出した値をObservableに変換する
    return this.http.get<Member[]>(this.membersUrl);
  }

  getMember(id: number): Observable<Member>{
    this.messageService.add(`MemberServise: 社員データ(id=${id}を取得しました。`)
    return of(MEMBERS.find(member => member.id === id));
  }

  private log(message: string){
    this.messageService.add(`MemberService: ${message}`);
  }
};