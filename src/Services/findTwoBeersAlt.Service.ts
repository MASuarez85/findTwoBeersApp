export class findTwoBeersAltService {


    public static async findTwoBeersAlt(beers: number[], target: number): Promise<any> {

        let map = [];
        let indexnum = [];
        let index: number;

        for (var x = 0; x < beers.length; x++) {
            if (map[beers[x]] != null) {
                index = map[beers[x]];
                indexnum[0] = index;
                indexnum[1] = x;
                break;
            } else {
                map[target - beers[x]] = x;
            }
        }
        return {
            index: indexnum
        };

    }
};