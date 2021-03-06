import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Box } from "../box.model";
import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { BoxService } from "../box.service";

@Injectable()
export class BoxNotifyResolver implements Resolve<Box> {

    constructor(private boxService: BoxService) {}

    resolve(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Box> | Promise<Box> | Box {
        return this.boxService.getBoxNotify(router.params['id'])
    }
}