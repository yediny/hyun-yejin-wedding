<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import rsvpDeco from '$lib/assets/rsvp-deco.svg';

	function copy(text: string) {
		navigator.clipboard.writeText(text);
		alert('계좌번호가 복사되었습니다.');
	}
</script>

<section class="gift">
	<div class="header">
		<img class="header-deco" src={rsvpDeco} alt="" />
		<h2 class="title {localeStore.locale}">
			{$_('gift_info.title')}
		</h2>
	</div>

	<div class="cards">

		<!-- 🤵 신랑 -->
		<div class="card">
			<h3>신랑</h3>
			<p>{$_('gift_info.groom.name')}</p>
			<p>{$_('gift_info.groom.phone')}</p>
			<button on:click={() =>
				copy($_('gift_info.groom.bank') + ' ' + $_('gift_info.groom.account'))
			}>
				{$_('gift_info.groom.bank')} {$_('gift_info.groom.account')}
			</button>
		</div>

		<!-- 👰 신부 -->
		<div class="card">
			<h3>신부</h3>
			<p>{$_('gift_info.bride.name')}</p>
			<p>{$_('gift_info.bride.phone')}</p>
			<button on:click={() =>
				copy($_('gift_info.bride.bank') + ' ' + $_('gift_info.bride.account'))
			}>
				{$_('gift_info.bride.bank')} {$_('gift_info.bride.account')}
			</button>
		</div>

		<!-- 👨‍👩‍👦 신랑측 혼주 -->
		<div class="card">
			<h3>신랑측 혼주</h3>

			<p>{$_('gift_info.groom_parents.father.name')}</p>
			<button on:click={() =>
				copy($_('gift_info.groom_parents.father.bank') + ' ' + $_('gift_info.groom_parents.father.account'))
			}>
				{$_('gift_info.groom_parents.father.bank')}
				{$_('gift_info.groom_parents.father.account')}
			</button>

			<p>{$_('gift_info.groom_parents.mother.name')}</p>
			<button on:click={() =>
				copy($_('gift_info.groom_parents.mother.bank') + ' ' + $_('gift_info.groom_parents.mother.account'))
			}>
				{$_('gift_info.groom_parents.mother.bank')}
				{$_('gift_info.groom_parents.mother.account')}
			</button>
		</div>

		<!-- 👨‍👩‍👧 신부측 혼주 -->
		<div class="card">
			<h3>신부측 혼주</h3>

			<p>{$_('gift_info.bride_parents.father.name')}</p>
			<button on:click={() =>
				copy($_('gift_info.bride_parents.father.bank') + ' ' + $_('gift_info.bride_parents.father.account'))
			}>
				{$_('gift_info.bride_parents.father.bank')}
				{$_('gift_info.bride_parents.father.account')}
			</button>

			<p>{$_('gift_info.bride_parents.mother.name')}</p>
			<button on:click={() =>
				copy($_('gift_info.bride_parents.mother.bank') + ' ' + $_('gift_info.bride_parents.mother.account'))
			}>
				{$_('gift_info.bride_parents.mother.bank')}
				{$_('gift_info.bride_parents.mother.account')}
			</button>
		</div>

	</div>
</section>

<style lang="scss">
	section.gift {
		padding: 4.5em 3.5em;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img.header-deco {
		width: 4.5em;
		margin-bottom: 0.8em;
	}

	h2.title {
		color: $primary-color;
		text-align: center;
		font-weight: 700;
	}

	.cards {
		margin-top: 2.5em;
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}

	.card {
		padding: 1.5em;
		border-radius: 8px;
		background: $white;
		box-shadow: 0 2px 8px rgba(0,0,0,0.08);
		text-align: center;
	}

	.card h3 {
		margin-bottom: 0.5em;
		color: $primary-color;
	}

	.card button {
		margin-top: 0.5em;
		padding: 0.5em;
		width: 100%;
		border-radius: 4px;
		background: $primary-color;
		color: white;
	}
</style>