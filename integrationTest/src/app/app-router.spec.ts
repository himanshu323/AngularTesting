import { routes } from "./app.routes";
import { UserDetailsComponent } from "src/app/3-user-details/user-details.component";
import { UsersComponent } from "./users/users.component";


describe("test the routes",()=>{

    it("Should conatin for /users route",()=>{

        expect(routes).toContain({ path: 'users', component: UsersComponent })
    })
})