import type { Component } from 'solid-js';

const Formulaire: Component = () => {
    return (
        //  ======================= GRID Principal =======================
        <div>
            <div class="flex m-10">
                <div class="mx-auto grid grid-cols-1 md:grid-cols-2 container h-96 bg-zinc-50">

                    {/* --------------- Colonne 1 --------------- */}
                    <div class="grid grid-cols-2">

                        <div>
                            <label for="marque">Marque</label>
                        </div>
                        <div>
                            <select id="marque" class="select">
                                <option disabled selected>Sélectionnez la marque</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>

                        <div>
                            <label for="modele">Modèle</label>
                        </div>
                        <div>
                            <select id="modele" class="select">
                                <option disabled selected>Sélectionnez le modèle</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>

                        <div>
                            <label for="category">Categorie</label>
                        </div>
                        <div>
                            <select id="category" class="select">
                                <option disabled selected>Sélectionnez la catégorie du véhicule</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>

                        <div>
                            <label for="fuel">Type de carburant</label>
                        </div>
                        <div>
                            <select id="fuel" class="select">
                                <option disabled selected>Sélectionnez le type de carburant</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>

                        <div>
                            <label for="type-bt-vit"> Boîte de vitesse </label>
                        </div>
                        <div>
                            <select id="type-bt-vit" class="select">
                                <option disabled selected>Sélectionnez le type de boîte de vitesse</option>
                                <option>Homer</option>
                                <option>Marge</option>
                            </select>
                        </div>

                        <div>
                            <label for="pos-volant"> Position du volant </label>
                        </div>
                        <div>
                            <select id="pos-volant" class="select">
                                <option disabled selected>Sélectionnez la position du volant</option>
                                <option>à droite</option>
                                <option>à gauche</option>
                            </select>
                        </div>

                        <div>
                            <label> Kilométrage </label>
                        </div>
                        <div>
                            <input type="text" placeholder="Km"
                                class="input input-bordered" />
                        </div>



                    </div>

                    {/* --------------- Colonne 2 --------------- */}
                    <div class="grid grid-cols-2">

                        <div>
                            <label for="nb-cyl">Nombre de cylindre</label>
                        </div>
                        <div>
                            <select id="nb-cyl" class="select">
                                <option disabled selected>Sélectionnez le nombre de cylindre</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>

                        <div>
                            <label for="cuir">Intérieur cuir</label>
                        </div>
                        <div>
                            <input type="checkbox" checked={true} class="checkbox" />
                        </div>

                        <div>
                            <label for="eng-vol">Volume du moteur</label>
                        </div>

                        <div>
                            <select id="eng-vol" class="select">
                                <option disabled selected>Sélectionnez le volume du moteur</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>

                        <div>
                            <label for="turbo">Turbo</label>
                        </div>
                        <div>
                            <input type="checkbox" checked={true} class="checkbox" />
                        </div>

                        <div>
                            <label for="roue-motrice"> Roue motrice </label>
                        </div>
                        <div>
                            <select id="roue-motrice" class="select">
                                <option disabled selected>Sélectionnez le type de roue motrice</option>
                                <option>Homer</option>
                                <option>Marge</option>
                            </select>
                        </div>

                        <div>
                            <label for="nb-portes"> Nombre de portes </label>
                        </div>
                        <div>
                            <select id="nb-portes" class="select">
                                <option disabled selected>Sélectionnez le nombre de porte</option>
                                <option>3</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div>
                            <label for="nb-airbag"> Nombre d'airbag </label>
                        </div>
                        <div>
                            <select id="nb-airbag" class="select">
                                <option disabled selected>Sélectionnez le nombre d'airbag</option>
                                <option>3</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div>
                            <label> Année de production </label>
                        </div>
                        <div>
                            <input type="text" placeholder="année"
                                class="input input-bordered"
                                />
                        </div>

                    </div>



                </div>

            </div>

            <div class="flex justify-center">
                <button type="submit" class="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Evaluer
                </button>
            </div>

        </div>

    );

};

export default Formulaire;