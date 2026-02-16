<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import rsvpDeco from '$lib/assets/rsvp-deco.svg';
	import { Phone, Copy, CreditCard } from '@lucide/svelte';

	let groomOpen = false;
	let brideOpen = false;
	let toast = '';

	function copy(text: string) {
		navigator.clipboard.writeText(text);
		toast = '계좌번호가 복사되었습니다';
		setTimeout(() => (toast = ''), 2000);
	}
</script>

<section class="gift">
	<div class="header">
		<img class="header-deco" src={rsvpDeco} alt="" />
		<h2 class="title {localeStore.locale}">
			{$_('gift_info.title')}
		</h2>
	</div>

	<div class="accordion">

		<!-- 🤵 신랑측 -->
		<div class="group">
			<button class="group-title" on:click={() => (groomOpen = !groomOpen)}>
				🤵 신랑측
				<span>{groomOpen ? '−' : '+'}</span>
			</button>

			{#if groomOpen}
				<div class="people">

					<!-- 신랑 -->
					<div class="person">
						<p class="name">신랑 {$_('gift_info.groom.name')}</p>

						<div class="row">
							<Phone size="16" />
							<a href={`tel:${$_('gift_info.groom.phone')}`}>
								{$_('gift_info.groom.phone')}
							</a>
						</div>

						<div class="row account">
							<CreditCard size="16" />
							<span>
								{$_('gift_info.groom.bank')}
								{$_('gift_info.groom.account')}
							</span>
							<button on:click={() =>
								copy($_('gift_info.groom.bank') + ' ' + $_('gift_info.groom.account'))
							}>
								<Copy size="14" />
							</button>
						</div>

						<button class="kakao">카카오페이 송금</button>
					</div>

					<!-- 👨 아버지 -->
					<div class="person">
						<p class="name">혼주 {$_('gift_info.groom_parents.father.name')}</p>

						<div class="row account">
							<CreditCard size="16" />
							<span>
								{$_('gift_info.groom_parents.father.bank')}
								{$_('gift_info.groom_parents.father.account')}
							</span>
							<button on:click={() =>
								copy($_('gift_info.groom_parents.father.bank') + ' ' + $_('gift_info.groom_parents.father.account'))
							}>
								<Copy size="14" />
							</button>
						</div>
					</div>

					<!-- 👩 어머니 -->
					<div class="person">
						<p class="name">혼주 {$_('gift_info.groom_parents.mother.name')}</p>

						<div class="row account">
							<CreditCard size="16" />
							<span>
								{$_('gift_info.groom_parents.mother.bank')}
								{$_('gift_info.groom_parents.mother.account')}
							</span>
							<button on:click={() =>
								copy($_('gift_info.groom_parents.mother.bank') + ' ' + $_('gift_info.groom_parents.mother.account'))
							}>
								<Copy size="14" />
							</button>
						</div>
					</div>

				</div>
			{/if}
		</div>

		<!-- 👰 신부측 -->
		<div class="group">
			<button class="group-title" on:click={() => (brideOpen = !brideOpen)}>
				👰 신부측
				<span>{brideOpen ? '−' : '+'}</span>
			</button>

			{#if brideOpen}
				<div class="people">

					<!-- 신부 -->
					<div class="person">
						<p class="name">신부 {$_('gift_info.bride.name')}</p>

						<div class="row">
							<Phone size="16" />
							<a href={`tel:${$_('gift_info.bride.phone')}`}>
								{$_('gift_info.bride.phone')}
							</a>
						</div>

						<div class="row account">
							<CreditCard size="16" />
							<span>
								{$_('gift_info.bride.bank')}
								{$_('gift_info.bride.account')}
							</span>
							<button on:click={() =>
								copy($_('gift_info.bride.bank') + ' ' + $_('gift_info.bride.account'))
							}>
								<Copy size="14" />
							</button>
						</div>

						<button class="kakao">카카오페이 송금</button>
					</div>

					<!-- 👨 아버지 -->
					<div class="person">
						<p class="name">혼주 {$_('gift_info.bride_parents.father.name')}</p>

						<div class="row account">
							<CreditCard size="16" />
							<span>
								{$_('gift_info.bride_parents.father.bank')}
								{$_('gift_info.bride_parents.father.account')}
							</span>
							<button on:click={() =>
								copy($_('gift_info.bride_parents.father.bank') + ' ' + $_('gift_info.bride_parents.father.account'))
							}>
								<Copy size="14" />
							</button>
						</div>
					</div>

					<!-- 👩 어머니 -->
					<div class="person">
						<p class="name">혼주 {$_('gift_info.bride_parents.mother.name')}</p>

						<div class="row account">
							<CreditCard size="16" />
							<span>
								{$_('gift_info.bride_parents.mother.bank')}
								{$_('gift_info.bride_parents.mother.account')}
							</span>
							<button on:click={() =>
								copy($_('gift_info.bride_parents.mother.bank') + ' ' + $_('gift_info.bride_parents.mother.account'))
							}>
								<Copy size="14" />
							</button>
						</div>
					</div>

				</div>
			{/if}
		</div>

	</div>

	{#if toast}
		<div class="toast">{toast}</div>
	{/if}
</section>

<style lang="scss">
section.gift { padding: 4em 2em; }

.group {
	margin-top: 1.2em;
	border-radius: 12px;
	background: white;
	box-shadow: 0 4px 14px rgba(0,0,0,0.08);
	overflow: hidden;
}

.group-title {
	width: 100%;
	padding: 1.1em;
	font-weight: 700;
	background: #fafafa;
	display: flex;
	justify-content: space-between;
}

.people { padding: 0.8em 1.1em; }

.person {
	padding: 0.9em 0;
	border-bottom: 1px solid #f1f1f1;
}

.person:last-child { border-bottom: none; }

.name { font-weight: 600; margin-bottom: 0.35em; }

.row {
	display: flex;
	align-items: center;
	gap: 0.5em;
	font-size: 0.95rem;
	margin: 0.2em 0;
}

.account { justify-content: space-between; }

.kakao {
	margin-top: 0.6em;
	width: 100%;
	background: #FEE500;
	border-radius: 8px;
	padding: 0.65em;
	font-weight: 700;
}

.toast {
	position: fixed;
	bottom: 2em;
	left: 50%;
	transform: translateX(-50%);
	background: rgba(0,0,0,0.85);
	color: white;
	padding: 0.7em 1.2em;
	border-radius: 20px;
	font-size: 0.9rem;
}
</style>