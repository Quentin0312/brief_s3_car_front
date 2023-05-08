import { Component, createSignal } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

interface MyDictionary {
    [key: string]: {
        label: string;
        elem: (string[] | number[]);
        type: string;
    };
}

function createDiv(key: string, dict: MyDictionary): JSX.Element {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 m-10 justify-center items-center">
        <label for={key}>{dict[key].label}</label>
        {dict[key].type === "text" ? (
          <input id={key} type="text" class="input" placeholder={dict[key].elem[0].toString()} />
        ) : dict[key].type === "checkbox" ? (
          <input id={key} type="checkbox" class="checkbox" />
        ) : (
          <select id={key} class="select">
            {dict[key].elem.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        )}
      </div>

    );
}

const Formulaire: Component = () => {

    const [data, setData] = createSignal<MyDictionary>({
        "mrq": { label: "Marque", elem: ["Homer", "Marge", "Bart", "Lisa", "Maggie"], type: "select" },
        "mdl": { label: "Modèle", elem: ["Homer", "Marge", "Bart", "Lisa", "Maggie"], type: "select" },
        "nb-portes": { label: "Nombre de portes", elem: [3, 5], type: "select" },
        "annee": { label: "Année de production", elem: ["année"], type: "text"},
        "turbo": { label: "Turbo", elem: [""], type: "checkbox"},
    });

    let itr: number = 0;

    return (
        //  ======================= GRID Principal =======================
        <div>
            <div class="flex m-10">
                <div class="mx-auto grid grid-cols-1 md:grid-cols-2 container bg-zinc-50">

                    {Object.keys(data()).map((key) => {
                        itr++;
                        if (itr % 2 === 0) {
                            return (createDiv(key, data()));
                        } else {
                            return (createDiv(key, data()));
                        }
                    })}


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