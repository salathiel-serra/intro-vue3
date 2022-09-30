const exampleForm = {
    template: `
        <form action="#" method="POST" @submit.prevent="saveData">
            <div class="row form-group">
                <div class="col-md-8">
                    <label for="exampleInputName1">Nome:</label>
                    <input v-model="personForm.name" type="text" name="name" class="form-control" id="exampleInputName1" aria-describedby="NameHelp">
                </div>
                <div class="col-md-4">
                    <label for="exampleFormControlSelect1">Gênero:</label>
                    <select v-model="personForm.genre" name="genre" class="form-control" id="exampleFormControlSelect1">
                        <option value=""> Escolha </option>
                        <option value="F"> Feminino </option>
                        <option value="M"> Masculino </option>
                    </select>
                </div>
            </div>

            <div class="row form-group">
                <div class="col-md-12">
                    <label for="exampleFormControlTextarea1">Descrição:</label>
                    <textarea v-model="personForm.description" class="form-control" name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>

            <div class="row form-group">
                <div class="col-md-12 form-check ml-3">
                    <input :checked="personForm.agree" type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label ml-1" name="agree" for="exampleCheck1">Eu confirmo ciência sobre os termos </label>
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    `,

    data() {
        return {
            personForm: {
                name: 'Salathiel Serra',
                genre: 'M',
                description: 'Lorem ipsum...123',
                agree: true
            }
        }
    },

    methods: {
        saveData() {
            console.log(this.personForm);
        }
    },
}

app.component('example-form', exampleForm);