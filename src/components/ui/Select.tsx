import { forwardRef, type SelectHTMLAttributes, useId } from "react";

interface SelectOption {
	label: string;
	value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	options: SelectOption[];
	error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ label, options, error, className, id, ...rest }, ref) => {
		const selectId = id ?? useId();
		const errorId = `${selectId}-error`;

		return (
			<div className="w-full mb-3">
				{label ? (
					<label htmlFor={selectId} className="label">
						{label}
					</label>
				) : (
					<div className="label h-5.5 aria-hidden:true" />
				)}

				<select
					id={selectId}
					ref={ref}
					aria-invalid={!!error}
					aria-describedby={error ? errorId : undefined}
					className={`select select-bordered w-full ${
						error ? "select-error" : ""
					} ${className ?? ""}`}
					{...rest}
				>
					{options.map((opt) => (
						<option key={opt.value} value={opt.value}>
							{opt.label}
						</option>
					))}
				</select>

				{error && (
					<span id={errorId} className="label-text-alt text-error mt-1 block">
						{error}
					</span>
				)}
			</div>
		);
	},
);

Select.displayName = "Select";
