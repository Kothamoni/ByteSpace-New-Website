type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string };

export default function Input({ label, id, ...rest }: Props) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-zinc-700">
        {label}
      </label>
      <input
        id={id}
        className="h-11 w-full rounded-lg border border-zinc-300 px-4 text-sm outline-none focus:border-brand-blue"
        {...rest}
      />
    </div>
  );
}
