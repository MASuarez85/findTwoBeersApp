export class findTwoBeersService {


    public static async findTwoBeers(beers: number[], target: number): Promise<any> {


        let index = []
        for (var i = 0; i < beers.length; i++) {
            var first = beers[i];
            var firstpos = i;
            for (var j = i + 1; j < beers.length; j++) {
                var second = beers[j];
                var secondpos = j
                if ((first + second) == target) {
                    index.push([firstpos, secondpos])

                }
            }

        }

        function getRandomDifferent(arr: any, last = undefined) {
            if (arr.length === 0) {
                return;
            } else if (arr.length === 1) {
                return arr[0];
            } else {
                let num = 0;
                do {
                    num = Math.floor(Math.random() * arr.length);
                } while (arr[num] === last);
                return arr[num];
            }
        };

        return { index: getRandomDifferent(index) };
    }

};