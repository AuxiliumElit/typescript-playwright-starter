import { Page } from '@playwright/test';

export class CommonHelper{

    readonly page: Page;

    constructor(page: Page){
        this.page = page
    }

    async someMethod() {
        
    }


}