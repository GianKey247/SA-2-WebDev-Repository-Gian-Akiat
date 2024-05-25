const RevolverDescriptionList=[ 
    {
        /*Piercer Description*/
        video:"Videos//Weapons//Weapon_Piercer.mp4",
        text:"The Piercer Revolver is the first gun found in ULTRAKILL and is the blue variant of the Revolver.\nIts alternate fire allows it to pierce through multiple targets dealing moderate damage."
    },{
        /*Sharp Shooter Description*/
        video:"Videos//Weapons//Weapon_SharpShooter.mp4",
        text:"The Marksman Revolver is the green variant of the Revolver, purchasable from the Terminal Shop.\nIts alternate fire flips a coin into the air, which can be shot with any hitscan weapon to increase the shot's damage and ricochet it into an enemy's weak point."    
    }
]


const ShotgunDescriptionList=[     
    {   
        /*Core Eject Description*/
        video:"Videos//Weapons//Weapon_CoreEject.mp4",
        text:"The Core Eject Shotgun is the blue variant of the Shotgun, obtainable from defeating Swordsmachine.\nIts alternate fire mode ejects its core as an explosive, and can be held down to fire over a greater distance."    
    },{
        /*Pump Charge Description*/
        video:"Videos//Weapons//Weapon_PumpCharge.mp4",
        text:"The Pump Charge Shotgun is the green variant of the Shotgun, purchasable from the Terminal Shop.\nIts alternate fire charges up its next shot, firing more projectiles over a wider area.\nHowever, an overcharged shot (indicated by a repeated buzzing sound) will also produce an explosion, dealing 50 self-damage."    
    }
]


const NailgunDescriptionList=[
    {
        /*Attractor Description*/
        video:"Videos//Weapons//Weapon_Nailgun.mp4",
        text:"The Attractor Nailgun is the blue variant of the Nailgun, obtainable in the first layer.\nIt fires special Silver Nails, and its alternate fire launches a magnet, pulling all nearby nails and any enemies they may be embedded inside toward it.\nThe magnet also explodes after a length of time, sending any nails within its range flying in all directions."    
    },{
        /*Overheat Description*/
        video:"Videos//Weapons//Weapon_OverHeat.mp4",
        text:"The Overheat Nailgun is the green variant of the Nailgun, purchasable in the Terminal Shop. It fires Regular Nails at a consistent rate, filling an orange meter on the back.\nOnce this orange meter is at least partially filled, pressing alternate fire will cause a rapid-fire burst of flaming nails setting any enemy they hit on fire.\nThis burst lasts until the orange meter is fully depleted.\nThis is at the cost of one of the Nailgun's Heat Sinks, those being the green bars under the orange meter.\nThese will recharge while not firing."    
    }
]


const RailcannonDescriptionList=[
    {
        /*Electric Description*/
        video:"Videos//Weapons//Weapon_Electric.mp4",
        text:"The Electric Railcannon is the blue variant of the Railcannon, obtained in the second layer.\nIt fires a single, highly-damaging lightning bolt that can pierce through an infinite number of enemies."    
    },{
        /*Screw Driver Description*/
        video:"Videos//Weapons//Weapon_ScrewDriver.mp4",
        text:"The Screwdriver Railcannon is the green variant of the Railcannon, purchasable from the Terminal Shop for 100,000P right after completing the level where you obtained the Electric railcannon.\nIt fires a projectile similar to the Magnet of the blue variations of the Nailguns, which sticks on an enemy, dealing damage overtime and increasing the blood dropping range of the enemy."    
    },{
        /*Malicious Description*/
        video:"Videos//Weapons//Weapon_Malicious.mp4",
        text:"The Malicious Railcannon is the red variant of the Railcannon, purchasable from the Terminal Shop for 100,000P right after completing the level where you obtained the Electric railcannon.\nIt fires a beam, similar to the ones of Malicious Face, causing an an explosion on the surface it collides with."    
    }
]


window.onload = function () {
    const itemLists = document.getElementsByClassName("itemList");
    for (const itemList of itemLists) {
        const buttonList = itemList.getElementsByClassName("itemChoice");
        const descriptionContainer = itemList.nextElementSibling;
        const videoElement = descriptionContainer.querySelector('.itemVideo');
        const pElement = descriptionContainer.querySelector('.itemText');
        let descriptionList;
        const type = itemList.dataset.type;
        if (type === "revolver") {
            descriptionList = RevolverDescriptionList;
        } else if (type === "shotgun") {
            descriptionList = ShotgunDescriptionList;
        } else if (type === "nailgun") {
            descriptionList = NailgunDescriptionList;
        } else if (type === "railcannon") {
            descriptionList = RailcannonDescriptionList;
        }
        showDivs(descriptionList,0,buttonList[0],buttonList,videoElement, pElement)
        for (let i = 0; i < buttonList.length; i++) {      
            buttonList[i].addEventListener('click', function () {
                showDivs(descriptionList, i, this, buttonList, videoElement, pElement);
            });
        }
        
    }
};

function updateSelection(buttonElement, buttonList) {
    for (const button of buttonList) {
        button.classList.remove("optionSelected");
    }
    buttonElement.classList.add("optionSelected");
}

function updateContent(dataList, index, videoElement, pElement) {
    if (index >= 0 && index < dataList.length) {
        videoElement.setAttribute("src", dataList[index].video);
        pElement.innerText = dataList[index].text;
    } else {
        console.error("Index out of bounds");
    }
}

function showDivs(dataList, index, buttonElement, buttonList, videoElement, pElement) {
    updateSelection(buttonElement, buttonList);
    updateContent(dataList, index, videoElement, pElement);
}
