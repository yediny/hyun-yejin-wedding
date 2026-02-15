import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	rsvp: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('fullname')?.toString().trim();
		const rsvp = formData.get('rsvp')?.toString();

		if (!name) {
			return fail(400, { missingName: true });
		}

		if (!rsvp) {
			return fail(400, { missingRsvp: true });
		}

		// RSVP 데이터는 수집되지만 이메일 전송은 하지 않음
		// 필요시 콘솔에 출력하거나 다른 방식으로 저장 가능
		console.log('RSVP received:', { name, rsvp });

		return { success: true };
	}
} satisfies Actions;
