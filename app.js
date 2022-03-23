while (!player1){
    var player1 = prompt('Speler 1: Voer je naam in. Jij bent rood.');
}
var player1Color = 'red';

while (!player2){
    var player2 = prompt('Speler 2: Voer je naam in. Jij bent blauw.');
}
var player2Color = 'blue';


// Selectors
var yangred = document.getElementById("yangred")
var yangblue = document.getElementById("yangblue")
var tableRow = document.getElementsByTagName('tr');
var tableData = document.getElementsByTagName('td');
var playerTurn = document.querySelector('.player-turn');
const slots = document.querySelectorAll('.slot');
const resetBtn = document.querySelector('.reset');


var currentPlayer = 1;
playerTurn.textContent = `${player1} zijn beurt!`

// Log cell coordinates when clicked

for (i = 0; i < tableData.length; i ++){
    tableData[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
    });
}


// Funtions

function changeColor(e){
    // Get clicked column index
    let column = e.target.cellIndex;
    let row = [];

    for (i = 5; i > -1; i--){
        if (tableRow[i].children[column].style.backgroundColor === 'white'){
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
                yangblue.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBcUFBUYFxcXGRoXGBgYGhgXIRoYGRwbGhocGhoiICwkGhwrIBoaJDclKC4vMjIyGSI4PTgwPCwxMi8BCwsLDw4PHRERHTEoIigxMTE0MjEzMTExMTExMTEzMTExMTExMTEzMTExMTExMTExMTExMTEzMTExMTExMTExMf/AABEIAOgA2QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQBBwj/xABHEAACAQIDBAcDCAcHAwUAAAABAgMAEQQSIQUxQVEGEyIyYXGBQlKRIzNicoKSobEHFENTc7LBY4OiwtHS8BXD0xYkJZOj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACkRAAICAQQCAAUFAQAAAAAAAAABAhEDBBIhMUFRBRNCYXEUIoGRodH/2gAMAwEAAhEDEQA/APs1KUoBSlKAUpUR0mxTR4WTIbSOBFGQL2eUiNWtxClsx8FNAZ7T2xFhyiylh1maxVS1gtrs1tQozKCbWF9bDWqu/STFSRStGI3EglEDIcrICWWJyScri2Vj3SNbZtK4ZUVJlsWISJgMzu+UOyd0MTlB6sXAtfKKxM9tBoPCuWed+DKWT0ZYra+MWWAiRX6sSAM3Y664Q9XKqrlBKo5DraxA7NgQ162TtNMRGJEuPZdGsGjcb0cX0YXHMEEEEggn55Oc4tex0IPJhqD8fjWeBndX66JurlACyKdVcDUI49pdSVbQi+mhYGMed/UIz9n0+lQexukMU5CN8lN+7YjtW3mNt0i8dNQLXC3tU7XUmnyjUUpSpApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUB5VL6QY4SYgINUw99ec7rY2+pGxFxxkYb1qY6RbWMSiOOxmkHZvqEXc0jjkOA9prDQXIp7ZYktfRQSSTckm7MzHixJJJ4kk1hmnSpGeSVKjleXNJI3LJH90F/wDuW9K8vWvDghRfebsRyLHMR6Xt6Vsrhb5OdgGj33g2YfiOR8Py+N1KgHmdX7LqOBKtru3Ec9dxH4GpPB7bxMVgkmdB7E15LD6Mlw9/Fi/lUW6A7/TmPI8KwzMN/aHMb/UcfT4VeM5R6ZZSa6Ldh+mY0EmHcHiY2SRR94o3wU1KYXpRhHNuuVCTYCQNESeS5wM3peqAjg6g3/5+BoyA761jqZLtF1lfk+sA17XyXCSywa4eRox7i6oeJvGbrrxIAPjVl2V02W4TFqIz+9W/Vndq4JLRcd5ZQBcsK6IZoyLxyJl2pWtHBAIIIIuCNQQdxBrZWxoKUpQClKUApSlAKUpQClKUApSlAeVDba2yIbRoA8zC6pewVd2eQ+yl/ViCBuJHm39sCBQq2aV75FN7ADe721yC48SSALXuKiHtmZmLu5zO7b3bdc8tLAAaAAAWArHJlUeF2UlKjIsbs7sXkc3dzpc8AB7KjcF4edyY3HPmIT3jc/VWxPxOUeTGuiWW9cUBzXf3u79Qbvjcn1HKuJybdnO3ZupSlUIFKUoBSlKA1ul9QbNz/oRxH/Bakb3uDow3j8iOYPP+oNbK1Toe8veXd4jip8D+djwqQba1SRg1mjhgGG4i4rKCOSRjHEmdh3iTlVL7s72Nr8gCeNra1MYtukKGxdtS4JrC7wE3aK/dvvaK/dPHL3SeRJavpuAxkc0ayxsHRxdWHwIIOoINwQdQQQda+YY7CyRMElVRm7rIxdSfduVUhvAjXgTqBn0e22cHN2z/AO3kPygP7M7hKPAaBvo6+zY9eOcovbI1x5PDPq9K8r2uk3FKUoBSlKAUpSgFKUoDyo7bO1Ew0TSvc20VBvdzoqL4k8dwFybAE1I18s29tb9bxBZTeGIlIrHRjueXkbkWU69kXHfIrPJPZGyspbVZgZ3dnlkOaRzdjwAHdROSKDYDxJNyxJFqxAr2vObbds5W7NOJNwF985fTe3loD6kVuFc41kP0UFvNyb/yL8a6KMClKVAFKVreVVIBOp7q7y31VGrelAbKVuhwGIk7kLAHc0pEQ9VPbH3K606OYg96SGM8gskv43j/ACrVYZvwKI6sXe1TY6NH2sQfsxKPzZq5sR0ZvuxDesan8iKt+nkQ6XkgcBHJLK0Meg+cZ7XEaOTc8ixYMQOJPIG11wyJFGI4xZR6kk72Y8WO8muHZWD/AFePq8yuxYszqpTMTuLAs2oAA32sBWTvXVjxqC+5nPJ4RjjkEgZXF1YWPD4HgeIPC1VLGIVJjfVk4+8p7r28bG/iGHCrYah+kWH7CyDenZbxRiB+DZTfgM3OmSG5fgpjnzRZP0d7WLwthnN3gtkJ9qFr5PVSGTyVCdWq5ivjfRnG9RjIHvYM/UP4rMQqjw+U6s/ZNfZKnHLdE9GErie0pStC4pSlAKUpQClKUBVOn21TDhurQ2knJjBBsVS15WGoI7PZBG5pENULZygDSu3prjjLjZB7MIWJeV7B3YebMFP8IVwYCThXFnlbo5skrlRJUoKwa5ZUWwZzYE6hQASzEcbAbuJIGl650m3SKGmI/KSDwRvQ5l/NT8a6akU2DhyQ0hkkYC2YySR6EgkWjKLbQcOFdC7BwnKUf3+IP4GQiuj9NL2V3xfkhqxL6hQCzt3UUZmbnYchcXJ0F9SKl8T0fjIPVzyxtwv1ci+oZcxHkwrvwEEcCkRi7HvyNqzke8eW+wFgL6AUjpnf7mTuivJH4Po+7dqd8g/dxnX7cnDyTd7xqawmEihBEaKl95A1b6zHVj4kmtb4uozaO2FjtmuS17KtrkC1zqQANRvPGuqGNLiKKPIibfEVpbFVUpOkp/d/FwD/ACn868XpNH7aSL49lh+BzfhWm2XoyeWyzviq0NMa4MJtGKT5uRWO/LuYDxU2I+FdNVKOTMmesaUoQK1Y1R1ZDreNgVktwQggm3Ec+Q1rbWyFtaFl2fO5pykbPcFowWuNxeI3uPDMtffxXxzpFsEL80vyUzBGUC3VvKwW4t7DFvsk8j2fsdUxx22j0cPKs9pSlaGwpSlAKUpQClKUB8KmbNJK1755ZX+/K7/1r2J7GufD3yLffbXz41srgly2cUu2TMEwIrHPaeP+HJ/NFUWjkbq2RzkyoT7kg9SYz/lNMMamiH0XBHuKzDmuPByXFdVdzOV8MzzmvMxrGlBYvVW6TMRKp4GMW8wzZvzWrTUbtvZxljGW3WJqt+N+8pPC+nqBVoOnZD5VFNZzWJNeMbEq2jDQqdCD4jhXiMGNl7R5L2j8BrXTZjtfoNbeeGviLcR419AwCOsUayElwihiTclrC9zx1qu7E2M7OJJVKqhDKraFmGoJG8Ab9bEkDhvtVYZJJvg1imlQpSuPaRuqx/vXEZ+rYtIPVFcetZkpWzsrJajNt7QEEeYd5iEQC286k23aKCbcbAca79jYXA4iPPEl2GjubrMrfTkBzX8jlPDSpSs3hglOO/wdvVq6MjgMrAqynUFSLEEcrVJ9GsexzYaRizxAFHN7yQnRWJO917reIVjbOBUHAJI5OqkOa4LRyWA6xAdQwGgkW4vbQ3BFtVXbjiyFMRGCXhOcKN7xnSWPeLll3X0zKh4UNccnCVMvNK0YadZEWRGDI6h1YahlYXUjwIINb6HaKUpQClKUApSlAfDMXEUlljItkllQD6KyMFPqtj61qqwdOsD1WMZ/ZxCiRfroFjkAHAACNvNzVfrhyKpNHHNVJivAbPGeT2P2gVH4sK9rVie4SNSvaHmpzD8QKQdSTKos+zpNbVLVA4Nu0CKnE3V3SOfIuTKlcG0trRw2DkljuVRc25nXQefLS9bsDjo5VzRsGtvGoI81OoqA8c1HdTr2dNK5GeSO5PyibzYdtR5DSQeQB00DGulHDAMpBBAII1BB1BB5UKNHjxqd4B8wDWSqBoBYeGlQPSXaMkZjjjYqSC7EWvbco1B0JzH7IrRsnb7ZhHMQQdBJYCx4BwNLeItbjzq211YvwWauTaeMEUbSbyBZRzY6KPK+/wAL111y7QwKTJke+hzAqbEGxFxw3EjUHfVUERvRXEM0bq7FirnUm5IcBjf7RapWSEmRGuLIH045mygH4Z/jWjZmzUgBCFmzWJLEEm27cAOPKu6pdXwTZT+lM2ecIScsUeY2udW7TEgbgFVTc7gTWvZWLOGkWZASF76j9pH7S+fEciBwvex9BplO05iRq8cqqT/ZyRoVHmEB+wah+kWzlw2KlhQAJdXjUeyji+XwAcSADgABVG32j6rQRhsWCce1d/lH0bbGzhNAHgIZgBLCb72tdbH3WUlT4OajcJOsiK67mUML6GxFxccDXX+j3F58GqE3MLvEfAA5kHpG6D0rjEXVzTRWsBIZE+pL8p6AOZFA5JV7s8bV49jf2dEj0Tmy9bhj+ybOn8GUllH2XEqAcFRedWSvnm08DE80DyRpILvH21VsucZ1YE7jmjC6fvK68Xs0CN2geaOQI3VhJ5guYA5bx5yh15rQiGZbVZeKV8wwnSLGKLriesBsVE0cbAA7vm8jH1apfD9NJl+dw6uLd6KSzE+EbgKPv1ZwZMdTjfkvFKgMD0swkjBDJ1TnQJMDESeSFuy5+oTU/VTZNPlHtKUoSV7pdsU4rDlUt1sZ6yIk2BexBUn3WUlfC4NtBXycHwIIJBB0KspsysODAggjgQa+8VSumPRMyk4jDKOt9uPQCWwsCCdBIAALnRgACRYEZZce7ldmWSG7lHz2va85gggg2KsCpUjeGU6qRyOtDXKcx37HPycR/s0/lFWN5gkbO3dVSx8gL1Xdk26uK27IlvLKKkOkEloVX33Vfhd/8lvWu9kRx/Myxh7dFYmVpGaSQ9pjcgbhyUeAGnpWoI8bLJG7KVIJK2Jy37QsdGBF9D4cr1PdF4o3xuHSRQys79lgCCRFIy3B03gEeIFb+l2yVw2IKoLRuoeNRuXUh0Ue6CARyDgDQVS32fVyhhv9PtrjgmIZD3WtmsGBXuyIe7Ih908t4Oh4E+wQ5M1joWLAe7fvAeBNz5sax6L4b9awjRKQs2GYiIndlYZkDW1yHtRkckBGoFZYebOt8pUglWRrXR1NmVraXBBGmnLSrHymq08sM3HxZEbf2O8rCSMgsFClDpcAkjKefaOh03ajjXf1CUt1fVPmPAqbfe7tvG9qv9KvGbSo5Gk+zRgoSkaIzZmVQpbmQNTz+Nb6UqhIpSlQCj4edo5OtjbK8c0roxFwG6xwwI4qQWUi40Y2I311bX2k+Knad0VWZUjCKxYBUzEdogXJZmO4bwNbXPNjEyTSx2t8ozjxEnylx6sR6Vqz65RcsdyqCzHyUamqO+j7jTrE8cc3pLn+D6D+jB/k8Qv9qr+rIF/yCuzbxUYxbEFngOe2uURv8nm5X62W3PI3I1Wejn61CsgFohIVJbR5AFDCwGqJvBuc3HQHUSuGjC3te5N2JJZmO67MbljoNSb6Vouj5vX6iE8klHm2Zbc+YdwCTGBKAOJiYSgepS3rXUMTyr10DKVO4gg+RFqhtjylsPCx3tHGT5lATQ4JOkV/aZMUrp7N86fUckgeQOZfs1oTH1YNt7N65AVIEiXyk7iDvU8gbDXgQPEGu4fYuIZrFMg4s5Ww8rElvTTxFbwyKuTnlFt2iR2c3XSxqQCFbrGuAQFW4IIOnavltyY8qtWHDwa4WTqwP2L3eIjTRV3xaDTIQBe5Vqjdm4BIUyrqTqzHex/oBwH9SSe0NWU5W7N8eRwVJlj2L0hixF07kq5g0TEE3Q5XMbbpEB0zDdezBTcCbr5rsstPHHggFjMYKJiXzHM0WhfDWsTMBcsSy5WzfOANX0Xqz77f4f8AbUHqRdqzdSleUJK70l6P4WdWllIidFuZ1KqQq69u+jIBfvbgTYi96+Xy4d1FypK3OVspUst9GaMktHca5Tci+tjcVfukWN6+Uwj5qFgX+nMLMo5FU0PG7kbjGb13aJ1qkscZdnJlmt21EbsU/JxeCKPgAP6V19JPm4v4lv8AA/8Aoa48AbZl912H3jnA+6wqW2nhjLAVTvizp4sutvUXX1q8lwRgyLHnjJ9JlbilZGV0OV0ZXU77MpBFxxFxqOIuKl+k+3RjHhcRtGY0dWDFTd3KE5SDqoyCxIBObcKhEcEAj/ngfGsqyvwfZ/KhOUcnldFp/RzicuLdOEsRJ+tGylR8JJD6VO9JsH1U6zKOxiD1cluEqr8m509pFKEk70iA31T+iUhXHYY8C7qfENFIB/iy/Cr/ANN8RGMK8bMvWMM0Md+08sZEkYRRqe2q62sOOlXj0eH8Uxr5kl7VkJShpUnzYpSlAKUpQHDjNlQyOskiXZRlBDMtxvsQCMw1O++810YbDRxjLGioOSgL8bb60Y7aUcWjNdrXCLqx9OA8TYeNQj7akeRS6EQg9uKN8juvhJ7J42XKb+2N9Q2kdeLT6jNH9qe1f1/BLbV23DBo7XfhGureF+CjxNqw2FK+IUTyCwLHq4wTlVVOXMd2dyQdToBawGpNVxezzK9o41iMspKqu5Fa+/3iqKCx9oqTxq8xLHFGFFljjUDXQKqjeT5CidltTp1p0o/U+TbtaYiPq1NnlPVqRvUEdt/spmIvxyjjXiIAAALACwHIDdUVh8YHcysLXGWMEWKx6HUcGYgMfJR7Nd64pedTRyyT6Oilaf1hedYvilHGlFaZ0VpnnVFLMwUAEknQADeTXDidogAm4AAuSTYAcyeFbNnbHxOMysoEcQZXDyqx6wowYBY7qxQkasSBYi2YHSaNMeKUmZbInM2ESBIJ2kijiVgqiNo5VRSrBpCoBB7QY6Gx36ipz/53lgfjL/pXVgthYhZ4pnkjXJmDdWrkyIykZGLGyrmyvxN00tc1Z6HpJUKjduY/qIHkABYAKinQNI5CRqeQLsoJ4A1JVVOl0uaSCLWwzzNbmoEaKRxBMrMPGKhE5bYtkJDGI0C3JIuWY2uzklndvpMxLHxJqHxD5mrv2jLwqLqYo86K8s0DsyeDi/2l3+pUj7hqawE3CobERlh2e8pzLfmP6EXB8Ca3YXEXAYceHEEaEHxBuPSpZeStEjidjRSMX7SFtWyEC55kEEXrm/8ATafvZf8A8/8Ax12LtC29HItfMi57HllHaJ8ga1Lt/DEXDsR4RS/7KzaNMeo1SW2EnS9GMWwI1IOeUkG4IkMZB5howpHoakYMLGhJRAC3ebezHmzHVj4kmuR9roIf1gRzNFcDMImUElggAL5b3YhfOo6TpC/sRADm76/dVSP8VLSJ+VqtQ7dv8lipVWbbeJO7qh/du349YPyrwbXxXvR//Wf99RuRovhWpfhf2Wh72NrXtpc2F+FzY2FeRkkAsLHiL3sfPjVYG2MVziP90/8A5a3rtufjHGfIuv4a3+NNyIfwvUr6f9JrHyRrGetIyaAg+1xC29q/u635VA43bMknZjvEnPTOf6IPidd6mudoZJGzyHM26+4KOSr7I/E2Fya7sPgQN9VlP0eppPhcYfuy8v14RHQYM8t+pO8k8yd5Pia70waqCzEAAXJOgAG8mu1sqKWYgAbya5WkzduQZUXtKjaajUPJytvC8LXOtgtYpyZ26jU48EPv4R07PhC3lYWJFkUixVN9yODMQCRwAUbwa4sTizMdPmlNx/aMDofqA7veIvuAzaMTijKCWOWIaknTrB437sf83l3tuHzSWEccsl9xjikdfvhcgHma6IxSPm5ueWbnLlv/AAyr29SGG6N4590Cxi++aRF05gR9YfQ29KmsJ0FY6z4lt98sKLGLcmZ85PmuU1NhYZMqU2JVBmdgo3XYga8teNSGz9kYvEW6uIoh/aTXjW19cqEdY54jshT71X3ZfRzCYchooVDgW6xrySW5dYxLW8L2qYqLNY4Euyr7J6HQRlZJj+sSCxBcAIjC2sceoBuLgsWYcGq0UpUGySXCPaUpQk8NUbbUgbGTNfuJFDbkQGlPqRKvwFXmvnmP0xOMb3plPwghT/LQw1D/AGEPjWu1c9ZzHU1y4lWsGXvKcwHvDivqL28bGrnKkbHkAKg+0SB5gE/kD8K1vGVJdRcHvrz4Zl+lb4gDkKwxEgMYkXctpL+A72nA5cwqZwMGbfQlulZxYbEbmU3H/LjwPhWGMwIkJkisHOrJuD+IPsv+B48xK4nZKMcyko/vLx+uu5t2/fbcRUbJFLF3kLD34rv8U7wPgA3nVXTJxZZQlug6ZxYeBmVow7qhYPJFew6xdVZkO5r63Fs1ge1YW602fzoJ45N5DMvFTZ142uO0vC448a2LJIvdZZBykGQ+rqCP8FYyhLwe3p/iWPqap/4bFwS1s/VV5VqOOYb4nPirRsPxZT+Fe/8AUP7OT4J/vqmyXo7lq8L+pf2bP1VeVerhhyrn/wCoMd0TD67Rj+Vm/KuWfaTA2aSKIn2R22+yTb+U1KxyZSeuwR83+OSWEYFcz48H5sZ/pXsn3/a+yD6VFM+f2ZZfGTsqDzytlHqq1tKSN3mCDkmp++Ru8lB8avHF7ODN8Ub4gq+7/wCGU84DAuTJJvVVG7h2Ev2frMeO+2lYCFnN5LaG4Qagcix9s/gOVxetkMKoLKLX1J3knmxOrHxNaS3W6D5viw9vwX6PM8eGmtbJJHlznKct0nb9mcSmVwQSqIysjCxzSIwZXsdGRWAIB0Yjla/1Lo/tgYhCGAWVLCRBuudzpfejWJB8GB1U189wKdoWqKw3SCSLFjFx3YDsFAe/Dfu+Z74PBvC4ptb6KwzKMqfR9xpXNgsUksaSxsGR1DKw4qwuK6aqdwpSlAKUpQClKUB5XyPpRtV4Mbi0CKVZ45FJJ3NDEDu4ZlavrlfJv0o4XLi0k4Sw2A+lE5zH4SJ8KtFJvkw1F7HRW22819Y19GI/oa7cFtFJTlF1bfY8fI8arLb66dlA9dHbmfhkaruKOGM2ywSIUJZRmRu+g1N+LKOJ5rx3jW4af6LSpJAMrBihMZIN9U0BPiVykjxqKrr2LMI57blmFj/EQEg+bJmF/wCzUcaozZ8qidkS1aq37QmSNDI5so8zqdAABqTfhVZxHSYDuRMfrsE/INVVFvo5pKiWxOBjl+cRWtuzAG3lfdXDJsNN6l18BJIB93Nb8K5sP0nUm0kZQc1PWAeYsD8AanopFZQykMp1BGoIo012FNrplbl2ey/tJPiP9tceJhZbPnkZRfOoNjb3lygEkcuIvbW1W6WIMNaicThipqydm0J2RiYOMi+rg6jM7yAg8szEWrdFEqCyKqjkoC/lWiAZHMfstd08Ne2voSCPBiNy1tOJTNkBLuBfIgaR7c8iAtbxtUmnL4N1a5plQXY24DiSeQA1J8BXOk0kgDRgIjAEO1mJB3FVBtYjiT6Vthwyqc2rNuLtqf8ARR4AAeFCKrs1mNpPnBlT93xb+IRw+iPUndXXSlCGzu2el7/CqrjME8JyyCwGgf2WHAg7r+G+rDBMVNSMOKBopOLMZws2fow2xYvg3OhzTQ+Fz8og9WDjic78q+k18wljSMjERxqJImEgKIoZgvfQH6aF0+3X0uNwwDKbggEEcQdQaq3bO/Tz3Rr0baUpUG4pSlAKUpQHlU79JezTLgzKo7WHbrfNLFZB5BSX80FXGsGQEEEXB0IPGidESipJpn5uZCWsASTuA1Jqe2Ts8x3d++RYDflH+p/pUvj9jDBzvAFsrXeJuLxX7pJ1JQkKRyyH2q11o5Wef8vY6YrCRSRobHQqeTA3U+hANZ0qCTLau0+vES7iilpF92QkoB6Wk8wwPGoiaOujFx5G6wd02Enhbc/puPhY+zR1rXH0cmZPdfgi2FW3owloL+87t8Dk/wAt/WqziEPAXJsAObHQD1JAq8YPDdXGkY1yKFvzIGp9Tr61TK/BEFxZjjcYka5m46Ko3seQH9dwrTgZ+ujzlcpuykXzWysQNbDeLH1qP2ns6ZpDIMrqQAq3ylBpoAdDc3JNxvGmgqR2VhTHHla2Yksbbhc6AeQtWdKvuXIva+FRMruodI3WRlYZgyKflFtxumYeZFfVsFhYo1CwoiJa4WNVVbcLAC1UWaMMCDVo6GzZsFCCSTGrQEneTAzQknxOS/rUWd+llaaK/wBJ+izIzYjCpmDEtLAu+51aSEe8d7J7WpXtXD1WNwwupuP9NCPAg6Wr7NVZ290TinYyxnqZjqWAushAt8qulza3aBDaDUgWqUzTJi3crsoVK27Swc2GNsRGUH70duM7t0lhl1NrOFJtoK0g1Y5nFrs9r0NatbyKLXIF91yBfyr1SS2VFZ23lVF7csx3L6kXoRVnZBiyN9XroTPmwUa2t1WeED6MTtGnxRVPrXz3C4aWR2jCdUyWz9bY5cwutlVjn8wwHjcEC6dAImRMSjNmC4khTbLoYYGNhyzFhvOoNVZvhi4tlupSlQdIpSlAKUpQClKUBE9INjJiosjHKynPG4FyjgEBgOIsSCOIJFfLmJSSSF8okjbK4VgwuADdTxFmU2OozAEA19N6TNP1BGHDlmZVYx2zrGe+Y7kdq2lwbi9xci1UjbESR4e74WVI4yMrELEI3dgitnLXUFmF210JvcXqUzLJDcRlK24fDYOwR8UJZramOUg3+jFG1reBU8L3rHB7OkkTrFlQR3OQvESzoDYM1nUITblusbC+UTZzvGzCuBiI7K2kZNkPuk7kPn7J9OV5DA4aeZzHDGJSNDIj3hGpHaltoRbVQCwvuO+r1sbojFGpafLPIylWzr2FVhZkjQ3sCCQSbsbnW3ZEqVdD5DmqkVbYexGLCaRSoXWNG0JJ0zMPZsNwOtzcgWFS8yWrsxOzpcLqgebDj2RmeWIchvM8dv7wW9u+mtJI5Fzxsrqbi6m4uNCPAg6EbxVZNt2zOeDYqOGlq3vCa5sRKsdsxNzfKqqzs1t+VFBZreAqpjtd0jKproTJdMQvuYhgPtxxSn8ZDVehZ5XMcIKMqhnaWORcgJIX5NsjOWKtaxAspN9wM30MV0fFxyZRJ1kcnYvZkaNY1cA925icZSSQUOpFiR1abHKLtltryvaVJ2mNQGM6IYNzmEfVNqbws0Vyd5ZFORz4spqwUoQ1ZQG6OSYW4EIxEZ/aKFMltfnUPf4C6XvfuKBWGytiYtEYxwxrE8jssbu0LqptbsiNhqQSASpAyjwr6FShG1FP2X0WDyyzYyGIsyRxxgMZGRUMjMQ+VShYyWsvBBVmwWCjhQRxIqICTlUW1Y3JPMkkkk766q9oSlQpSlCRSlKAUpSgFKUoBXhFKUBiiAaAADwFqim6NYEtnODwxe98xhivffe+W9/GlKAlVUAAAWA0AGlqzpSgPKiMfsCKRjKuaKU75YiFY8BnBBWS3DOrW4WpSgKxioSkjpjZSI0sY2VHijkQgHNI4JGcNmUpmAIAbL2hbnwmMhjxI/VVadJI3MhivN1XVFSttSQjZ27C31AIW5avKUKKKRJR5sTiY+peSLLFKZHMRXe0QjjdJEB17baWIyHUXN53ZOyXilklklEjSJHHomQKsbSMNMxuSZWudNw0pShaJM0pShIpSlAKUpQClKUApSlAKUpQClKUB//Z"
                row[0].style.backgroundColor = 'red';
                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()){
                    playerTurn.textContent = `${player1} Heeft gewonnen!!`;
                    playerTurn.style.color = player1Color;
                    return alert(`${player1} Heeft gewonnen!!`);
                }else if (drawCheck()){
                    playerTurn.textContent = 'Gelijkspel!';
                    return alert('Gelijkspel!');
                }else{
                    playerTurn.textContent = `${player2} zijn beurt`;
                    return currentPlayer = 2;
                }
            }else{
                row[0].style.backgroundColor = 'blue';
                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()){
                    playerTurn.textContent = `${player2} Heeft gewonnen`;
                    playerTurn.style.color = player2Color;
                    return alert(`${player2} Heeft gewonnen!!`);
                }else if (drawCheck()){
                    playerTurn.textContent = 'Gelijkspel!';
                    return alert('DRAW!');
                }else{
                    playerTurn.textContent = `${player1} zijn beurt`;
                    return currentPlayer = 1;
                }

            }
        }
    }

}

Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener('click', changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = 'white';
});

function colorMatchCheck(one, two, three, four){
    return (one === two && one === three && one === four && one !== 'white' && one !== undefined);
}

function horizontalCheck(){
    for (let row = 0; row < tableRow.length; row++){
        for (let col =0; col < 4; col++){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor,tableRow[row].children[col+1].style.backgroundColor,
                tableRow[row].children[col+2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor)){
                return true;
            }
        }
    }
}

function verticalCheck(){
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor,
                tableRow[row+2].children[col].style.backgroundColor,tableRow[row+3].children[col].style.backgroundColor)){
                return true;
            }
        }
    }
}

function diagonalCheck(){
    for(let col = 0; col < 4; col++){
        for (let row = 0; row < 3; row++){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor,
                tableRow[row+2].children[col+2].style.backgroundColor,tableRow[row+3].children[col+3].style.backgroundColor)){
                return true;
            }
        }
    }

}

function diagonalCheck2(){
    for(let col = 0; col < 4; col++){
        for (let row = 5; row > 2; row--){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row-1].children[col+1].style.backgroundColor,
                tableRow[row-2].children[col+2].style.backgroundColor,tableRow[row-3].children[col+3].style.backgroundColor)){
                return true;
            }
        }
    }
}

function drawCheck(){
    let fullSlot = []
    for (i=0; i < tableData.length; i++){
        if (tableData[i].style.backgroundColor !== 'white'){
            fullSlot.push(tableData[i]);
        }
    }
    if (fullSlot.length === tableData.length){
        return true;
    }
}

resetBtn.addEventListener('click', () => {
    slots.forEach(slot => {
        slot.style.backgroundColor = 'white';
    });
    playerTurn.style.color = 'black';
    return (currentPlayer === 1 ? playerTurn.textContent = `${player1} zijn beurt` : playerTurn.textContent = `${player2} zijn beurt`);
});
