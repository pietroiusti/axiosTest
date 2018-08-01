import  axios  from 'axios';
import { getOrgByEventUserAsync } from './org';

const event = { properties: { organizationId: "ip_43A43232R3243EW342WF43FE43" }, userid: "5" };

describe('Organization api', () => {
    it.only('should return first Org Id by userId', async () => {
       const expectedResponse = [{ "orgId": "ip_mock-OrganizationId", "status": "active", "role": "owner", "surveys": null, "campaignSource": "TC ipifny", "campaignTypeId": 47, "campaignId": 10006 }];
        const go = async (event) => {
            try {
                var orgId4 = await getOrgByEventUserAsync(event);
                console.log('getOrgByEventUserAsync', orgId4); //      
            } catch (e) {
                console.error(e); // 💩
            }
        }
       
        go(event);
        // return expect(2).toBe(2);
        return getOrgByEventUserAsync(event).then((orgId) => expect(orgId).toEqual('nesciunt quas odio'));

    })

});


