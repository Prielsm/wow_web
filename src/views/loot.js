const lootView = `
<form>
    <div>
        <input />
        <button>submit</button>
    </div>
</form>
`;

export function applyLootView() {
  document.body.innerHTML = lootView;
  document.body.className = 'body-loot';
}
