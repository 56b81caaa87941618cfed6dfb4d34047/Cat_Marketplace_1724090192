/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1724090195", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-white">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium text-slate-200 text-slate-400">Unique Breeds</div>
                <div class="text-slate-400">Discover a wide variety of cat breeds from around the world, each with their own distinct personalities and characteristics.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="start-date-des-1 text-slate-200 text-slate-400">Expert Advice</div>
                <time class="text-slate-400" id="start-time-des-1">Get guidance from experienced breeders and veterinarians to ensure you find the perfect feline companion for your lifestyle.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="end-date-des-1 text-slate-200 text-slate-400">Safe Adoptions</div>
                <time class="text-slate-400" id="end-time-des-1">Our secure platform ensures ethical practices and safe transactions, connecting loving homes with adorable cats in need.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

