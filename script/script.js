function gethomeNumber(number) {
    if (number === 1){
        function getOperateWithBucket(bucketCapacity) {
            let currentVolume = 0;

            function getCurrentVolume() {
                return currentVolume;
            }

            function fillBucket() {
                currentVolume = bucketCapacity;
            }

            function emptyBucket() {
                currentVolume = 0;
            }

            function addWater(amount) {
                if (currentVolume + amount <= bucketCapacity) {
                    currentVolume += amount;
                }
            }

            function transferToAnother(targetBucket) {
                const spaceInTarget = targetBucket.bucketCapacity - targetBucket.getCurrentVolume();
                if (spaceInTarget >= currentVolume) {
                    targetBucket.addWater(currentVolume);
                    currentVolume = 0;
                } else {
                    targetBucket.fillBucket();
                    currentVolume -= spaceInTarget;
                }
            }

            return {
                getCurrentVolume,
                fillBucket,
                emptyBucket,
                transferToAnother,
                addWater,
                bucketCapacity 
            };
        }

        const fiveLiterBucket = getOperateWithBucket(5);
        const threeLiterBucket = getOperateWithBucket(3);
        const expectedResult = 4

        function measureWater() {
            fiveLiterBucket.fillBucket();
            console.log(`Состояние ведер: 5л ведро - ${fiveLiterBucket.getCurrentVolume()}л, 3л ведро - ${threeLiterBucket.getCurrentVolume()}л`);

            fiveLiterBucket.transferToAnother(threeLiterBucket);
            console.log(`Состояние ведер: 5л ведро - ${fiveLiterBucket.getCurrentVolume()}л, 3л ведро - ${threeLiterBucket.getCurrentVolume()}л`);

            threeLiterBucket.emptyBucket();
            console.log(`Состояние ведер: 5л ведро - ${fiveLiterBucket.getCurrentVolume()}л, 3л ведро - ${threeLiterBucket.getCurrentVolume()}л`);

            fiveLiterBucket.transferToAnother(threeLiterBucket);
            console.log(`Состояние ведер: 5л ведро - ${fiveLiterBucket.getCurrentVolume()}л, 3л ведро - ${threeLiterBucket.getCurrentVolume()}л`);

            fiveLiterBucket.fillBucket();
            console.log(`Состояние ведер: 5л ведро - ${fiveLiterBucket.getCurrentVolume()}л, 3л ведро - ${threeLiterBucket.getCurrentVolume()}л`);

            fiveLiterBucket.transferToAnother(threeLiterBucket);
            console.log(`Состояние ведер: 5л ведро - ${fiveLiterBucket.getCurrentVolume()}л, 3л ведро - ${threeLiterBucket.getCurrentVolume()}л`);
        }

        measureWater();
        console.log( expectedResult === fiveLiterBucket.getCurrentVolume() ? fiveLiterBucket.getCurrentVolume() : threeLiterBucket.getCurrentVolume() )
    }
    else{
        let firstTeamScore = 0;
        let secondTeamScore = 0;

        function getRandomZone() {
            return Math.floor(Math.random() * 4) + 1;
        }

        function gameZonePlay(attackingTeam) {
            let ballZone = getRandomZone();
            let notGuardedZones =  getRandomZone();
            let defendingTeam = (attackingTeam === 1) ? 2 : 1;
            console.log("Подача");
            console.log(`Место удара команды №${attackingTeam}`, ballZone);
            console.log(`Пустая зона команды №${defendingTeam}`, notGuardedZones);

            if (notGuardedZones === ballZone) {
                console.log(`Очко команде №${attackingTeam} за успешную атаку`);
                return true; 
            } else {
                console.log(`Команда №${defendingTeam} отбила`);
                return false; 
            }
        }

        function matchPoint(attackingTeam) {
            if (attackingTeam === 1) {
                firstTeamScore++;
            } else {
                secondTeamScore++;
            }
            console.log("Очки первой команды:", firstTeamScore, " Очки второй команды:", secondTeamScore);
        }

        document.querySelector("#startButton").addEventListener("click", function() {
            firstTeamScore = 0;
            secondTeamScore = 0;
            console.log('Начали')
            while (firstTeamScore < 3 && secondTeamScore < 3) {
                let attackingTeam = 1;
                while (true) {
                    if (gameZonePlay(attackingTeam)) {
                        matchPoint(attackingTeam);
                        if (firstTeamScore == 3 || secondTeamScore == 3) {
                            console.log("Последнее очко забито");
                            break;
                        }
                    }
                    attackingTeam = (attackingTeam === 1) ? 2 : 1;
                }
            }

            if (firstTeamScore > secondTeamScore) {
                console.log("Команда 1 победила!");
            } else {
                console.log("Команда 2 победила!");
            }
        });

    }
}

gethomeNumber(2)
