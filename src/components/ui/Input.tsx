// features/auth/components/AuthInput.tsx
import { forwardRef, useId, type InputHTMLAttributes } from "react";

interface AuthInputProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"type"
> {
	label: string;
	type?: "text" | "email" | "password";
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, AuthInputProps>(
	({ label, type = "text", error, className, id, ...rest }, ref) => {
		const inputId = id ?? useId();
		const errorId = `${inputId}-error`;

		return (
			<div className="w-full mb-3">
				<label htmlFor={inputId} className="label">
					{label}
				</label>
				<input
					id={inputId}
					ref={ref}
					type={type}
					aria-invalid={!!error}
					aria-describedby={error ? errorId : undefined}
					className={`input w-full ${error ? "input-error" : ""} ${className ?? ""}`}
					{...rest}
				/>
				{error && (
					<span id={errorId} className="label-text-alt text-error mt-1 block">
						{error}
					</span>
				)}
			</div>
		);
	},
);

Input.displayName = "Input";
