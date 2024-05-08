import { Page, expect } from '@playwright/test';

export default class HomePage{

    private readonly homeTitleLocator = "/html/body/div[4]/div[1]/section/div[1]/div/div[1]/div[1]/div/div/div[2]/span";

    constructor(private page : Page){

    }

    async expectHomeTitleToBeVisible(){
        await expect(this.page.getByTitle(this.homeTitleLocator)).toBeVisible({timeout : 15000});
    }
  

}
