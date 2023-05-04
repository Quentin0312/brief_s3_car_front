import type { Component } from 'solid-js';

const Formulaire: Component = () => {
    return (
        <div>
            <form class="grid grid-cols-2 gap-4">

                <div class="grid grid-cols-10 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="modele" class="block font-medium mb-2 w-min" >Modèle</label>
                    </div>
                    <select id="modele" class="select w-full max-w-xs w-min">
                        <option disabled selected>Sélectionnez le modèle</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div class="grid grid-cols-10 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="category" class="block font-medium mb-2 w-min" >Categorie</label>
                    </div>
                    <select id="category" class="select w-full max-w-xs w-min">
                        <option disabled selected>Sélectionnez la catégorie du véhicule</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>

                <div>
                    <div class="grid grid-cols-10 gap-4">
                        <div class="flex items-center justify-center">
                            <label for="marque" class="block font-medium mb-2 w-min" >Marque</label>
                        </div>
                        <select id="marque" class="select w-full max-w-xs w-min">
                            <option disabled selected>Sélectionnez la marque</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    </div>
                </div>
                <div class="grid grid-cols-8 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="nb-cyl" class="block font-medium mb-2 w-max" >Nombre de cylindre</label>
                    </div>
                    <select id="nb-cyl" class="select w-full max-w-xs w-max">
                        <option disabled selected>Sélectionnez le nombre de cylindre</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>

                <div class="grid grid-cols-10 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="category" class="block font-medium mb-2 w-max" >Type de carburant</label>
                    </div>
                    <select id="fuel" class="select w-full max-w-xs w-max">
                        <option disabled selected>Sélectionnez le type de carburant</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div class="grid grid-cols-10 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="cuir" class="block font-medium mb-2 w-min" >Intérieur cuir</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={true} class="checkbox" />
                    </div>
                </div>

                <div class="grid grid-cols-8 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="eng-vol" class="block font-medium mb-2 w-max" >Volume du moteur</label>
                    </div>
                    <select id="eng-vol" class="select w-full max-w-xs w-max">
                        <option disabled selected>Sélectionnez le volume du moteur</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div class="grid grid-cols-10 gap-4">
                    <div class="flex items-center justify-center gap-4">
                        <label for="turbo" class="block font-medium mb-2 w-min" >Turbo</label>
                        <input type="checkbox" checked={true} class="checkbox" />
                    </div>
                </div>

                <div class="grid grid-cols-8 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="type-bt-vit" class="block font-medium mb-2 w-max" >
                            Boîte de vitesse
                        </label>
                    </div>
                    <select id="type-bt-vit" class="select w-full max-w-xs w-max">
                        <option disabled selected>Sélectionnez le type de boîte de vitesse</option>
                        <option>Homer</option>
                        <option>Marge</option>
                    </select>
                </div>

                <div class="grid grid-cols-8 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="type-bt-vit" class="block font-medium mb-2 w-max" >
                            Position du volant
                        </label>
                    </div>
                    <select id="type-bt-vit" class="select w-full max-w-xs w-max">
                        <option disabled selected>Sélectionnez la position du volant</option>
                        <option>à droite</option>
                        <option>à gauche</option>
                    </select>
                </div>

                <div class="grid grid-cols-8 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="type-bt-vit" class="block font-medium mb-2 w-max" >
                            Roue motrice
                        </label>
                    </div>
                    <select id="type-bt-vit" class="select w-full max-w-xs w-max">
                        <option disabled selected>Sélectionnez le type de roue motrice</option>
                        <option>Homer</option>
                        <option>Marge</option>
                    </select>
                </div>

                <div class="grid grid-cols-8 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="type-bt-vit" class="block font-medium mb-2 w-max" >
                            Nombre de porte
                        </label>
                    </div>
                    <select id="type-bt-vit" class="select w-full max-w-xs w-max">
                        <option disabled selected>Sélectionnez le nombre de porte</option>
                        <option>3</option>
                        <option>5</option>
                    </select>
                </div>

                <div class="grid grid-cols-8 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="type-bt-vit" class="block font-medium mb-2 w-max" >
                            Nombre d'airbag
                        </label>
                    </div>
                    <select id="type-bt-vit" class="select w-full max-w-xs w-max">
                        <option disabled selected>Sélectionnez le nombre d'airbag</option>
                        <option>3</option>
                        <option>5</option>
                    </select>
                </div>

                <div class="grid grid-cols-8 gap-4">
                    <div class="flex items-center justify-center">
                        <label for="type-bt-vit" class="block font-medium mb-2 w-max" >
                            Nombre de porte
                        </label>
                        
                    </div>
                    <input type="number" placeholder="Km"
                           
                           class="input input-bordered input-md w-full max-w-xs" />
                </div>

                <div class="col-span-2 flex justify-center">
                    <button type="submit" class="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Evaluer
                    </button>
                </div>

            </form>


        </div>
    );

};

export default Formulaire;